import { useEffect, useState, useRef, useCallback } from 'react';
import { useStore } from 'zustand';
import styled from '@emotion/styled';
import { resultStore } from '@/store/resultStore';
import { findRandomRatio, findItemByRatio } from './helpers';
import type { ItemInfo, Circle, Ratio } from './types';

const ROTATE_DURATION = 2000; // 회전 시간
const ROTATE_COUNT = 3; // 몇 바퀴 회전할 것인지
const MAX_TEXT_LENGTH = 10; // 룰렛 아이템의 텍스트 최대 길이

export const COLORS = [
  '#fecaca',
  '#fed7aa',
  '#fde68a',
  '#fef08a',
  '#d9f99d',
  '#bbf7d0',
  '#a7f3d0',
  '#99f6e4',
  '#a5f3fc',
  '#bae6fd',
  '#bfdbfe',
  '#c7d2fe',
  '#ddd6fe',
  '#e9d5ff',
  '#f5d0fe',
  '#fbcfe8',
  '#fecdd3'
];

interface Props {
  items: ItemInfo[];
  colors: string[];
}

const Roulette = ({ items, colors }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRotating, setIsRotating] = useState(false);
  const { addResult } = useStore(resultStore);

  /**
   * 룰렛에서 아이템의 배경을 그립니다.
   */
  const drawItemBackground = useCallback(
    ({
      ctx,
      circle,
      backgroundColor,
      startAngle,
      endAngle
    }: {
      ctx: CanvasRenderingContext2D;
      circle: Circle;
      backgroundColor: string;
      startAngle: number;
      endAngle: number;
    }) => {
      const { centerX, centerY, radius } = circle;

      ctx.beginPath();
      ctx.fillStyle = backgroundColor;
      ctx.lineWidth = 2;
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius - 5, startAngle, endAngle);
      ctx.fill();
      ctx.stroke();
      ctx.closePath();
    },
    []
  );

  /**
   * 룰렛에서 아이템의 텍스트를 그립니다.
   */
  const drawItemText = useCallback(
    ({
      ctx,
      circle,
      angle,
      textAngle,
      text
    }: {
      ctx: CanvasRenderingContext2D;
      circle: Circle;
      angle: number;
      textAngle: number;
      text: string;
    }) => {
      const { centerX, centerY, radius } = circle;

      const textX = centerX + (radius / 2) * Math.cos(textAngle);
      const textY = centerY + (radius / 2) * Math.sin(textAngle);
      let maxFontSize = 0;

      if (angle > 60) {
        maxFontSize = 2;
      } else if (angle > 30) {
        maxFontSize = 1.5;
      } else if (angle > 15) {
        maxFontSize = 1.25;
      } else if (angle > 10) {
        maxFontSize = 1;
      } else if (angle > 5) {
        maxFontSize = 0.75;
      } else {
        maxFontSize = 0.5;
      }

      const fontSize = Math.min(maxFontSize, MAX_TEXT_LENGTH / text.length);

      ctx.save(); // 현재 캔버스 상태 저장
      ctx.translate(textX, textY); // 캔버스의 원점을 텍스트 위치로 이동
      ctx.rotate(textAngle); // 텍스트를 대각선으로 회전

      ctx.fillStyle = 'black';
      ctx.textAlign = 'center';
      ctx.font = `bold ${fontSize}rem Raleway`;
      ctx.fillText(text, 15, 0); // 회전한 캔버스에 텍스트를 그림
      ctx.restore();
    },
    []
  );

  /**
   * 룰렛에서 모든 아이템을 그립니다.
   */
  const drawItems = useCallback(
    (ctx: CanvasRenderingContext2D, circle: Circle) => {
      const totalRatio = items.reduce((acc, { checked, ratio }) => (!checked ? acc : acc + ratio), 0);
      let startAngle = -(1 / 2) * Math.PI;

      items.forEach((item, i) => {
        const { ratio, checked } = item;
        const percent = (ratio / totalRatio) * 100;
        const angle = (360 * percent) / 100;
        const radian = (angle * Math.PI) / 180;
        const endAngle = radian + startAngle;

        if (!checked) return;

        drawItemBackground({
          ctx,
          circle,
          backgroundColor: colors[i % (colors.length - 1)],
          startAngle,
          endAngle
        });

        drawItemText({
          ctx,
          circle,
          angle,
          textAngle: startAngle + radian / 2,
          text: item.value
        });

        startAngle = endAngle;
      });
    },
    [items, colors, drawItemBackground, drawItemText]
  );

  /**
   * 룰렛을 회전시키는 애니메이션을 실행합니다.
   */
  const animateRotation = useCallback((canvas: HTMLCanvasElement, ratio: Ratio) => {
    const { random, total } = ratio;

    canvas.style.transform = `initial`;
    canvas.style.transition = `initial`;

    setTimeout(() => {
      const arc = 360 / total;
      const rotate = random * arc + 360 * ROTATE_COUNT + arc / 2;

      canvas.style.transform = `rotate(-${rotate}deg)`;
      canvas.style.transition = `${ROTATE_DURATION}ms`;
    }, 0);
  }, []);

  const handleClick = useCallback(() => {
    if (!canvasRef.current) return;
    if (isRotating) return;

    setIsRotating(true);
    const ratio = findRandomRatio(items);
    const result = findItemByRatio(items, ratio.random);
    animateRotation(canvasRef.current, ratio);

    setTimeout(() => {
      setIsRotating(false);
      addResult(result?.value ?? '');
    }, ROTATE_DURATION);
  }, [animateRotation, isRotating, items, addResult]);

  useEffect(() => {
    const ctx = canvasRef?.current?.getContext('2d');

    if (!canvasRef.current) return;
    if (!canvasRef.current.getContext) return;
    if (!ctx) return;

    const circle: Circle = {
      centerX: canvasRef.current.width / 2,
      centerY: canvasRef.current.height / 2,
      radius: canvasRef.current.width / 2 - 10
    };

    // 룰렛 초기화
    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    // 룰렛 배경 영역 그리기
    ctx.fillStyle = '#DBDBDB60';
    ctx.arc(circle.centerX, circle.centerY, circle.radius, 0, 2 * Math.PI);
    ctx.fill();

    // 룰렛 아이템 영역 그리기
    ctx.strokeStyle = '#DBDBDB';
    drawItems(ctx, circle);
  }, [items, colors, drawItems]);

  return (
    <RouletteContainer>
      <CanvasContainer>
        <canvas
          width={500}
          height={500}
          ref={canvasRef}
        />
        <StartButton
          disabled={isRotating}
          onClick={handleClick}>
          START
        </StartButton>
      </CanvasContainer>
      <Cursor
        src="/rouletteCursor.svg"
        alt="커서"
      />
    </RouletteContainer>
  );
};

export default Roulette;

const RouletteContainer = styled.div`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const CanvasContainer = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StartButton = styled.button`
  width: 6.25rem;
  height: 6.25rem;
  position: absolute;
  border: none;
  background: #ffffff;
  box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;

  &:enabled:active {
    margin-left: 3px;
    margin-top: 3px;
    box-shadow: none;
  }
`;

const Cursor = styled.img`
  margin-left: 0.5rem;
  position: absolute;
  top: 0;
`;
