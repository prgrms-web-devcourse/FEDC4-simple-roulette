import { useEffect, useRef, useCallback } from 'react';
import { drawItemBackground, drawItemText, findResultItem } from './helpers';
import type { ItemInfo, Circle } from './types';
import styled from '@emotion/styled';

const ROTATE_DURATION = 2000; // 회전 시간
const ROTATE_COUNT = 3; // 몇 바퀴 회전할 것인지

interface Props {
  items: ItemInfo[];
  colors: string[];
}

const Roulette = ({ items, colors }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

        // 룰렛 아이템 배경 그리기
        drawItemBackground({
          ctx,
          circle,
          backgroundColor: colors[i % (colors.length - 1)],
          startAngle,
          endAngle
        });

        // 룰렛 아이템 텍스트 그리기
        drawItemText({
          ctx,
          circle,
          radian,
          startAngle,
          text: item.value
        });

        startAngle = endAngle;
      });
    },
    [items, colors]
  );

  useEffect(() => {
    const ctx = canvasRef?.current?.getContext('2d');

    if (!canvasRef.current) return;
    if (!canvasRef.current.getContext) return;
    if (!ctx) return;

    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    const circle: Circle = {
      centerX: canvasRef.current.width / 2,
      centerY: canvasRef.current.height / 2,
      radius: canvasRef.current.width / 2 - 10
    };

    // 룰렛 배경 영역 그리기
    ctx.fillStyle = '#DBDBDB60';
    ctx.arc(circle.centerX, circle.centerY, circle.radius, 0, 2 * Math.PI);
    ctx.fill();

    // 룰렛 아이템 영역 그리기
    ctx.strokeStyle = '#DBDBDB';
    drawItems(ctx, circle);
  }, [items, colors, drawItems]);

  const rotateRoulette = useCallback(
    (canvas: HTMLCanvasElement) => {
      const totalRatio = items.reduce((acc, { checked, ratio }) => (!checked ? acc : acc + ratio), 0);
      const randomValue = Math.floor(Math.random() * totalRatio);

      canvas.style.transform = `initial`;
      canvas.style.transition = `initial`;

      setTimeout(() => {
        const arc = 360 / totalRatio;
        const rotate = randomValue * arc + 360 * ROTATE_COUNT + arc / 2;

        canvas.style.transform = `rotate(-${rotate}deg)`;
        canvas.style.transition = `${ROTATE_DURATION}ms`;
      }, 0);

      return findResultItem(items, randomValue);
    },
    [items]
  );

  const handleClick = useCallback(() => {
    if (!canvasRef.current) return;
    const result = rotateRoulette(canvasRef.current);

    setTimeout(() => {
      console.log(result);
    }, ROTATE_DURATION);
  }, [rotateRoulette]);

  return (
    <RouletteContainer>
      <CanvasContainer>
        <canvas
          width={500}
          height={500}
          ref={canvasRef}
        />
        <StartButton onClick={handleClick}>START</StartButton>
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
  width: 100px;
  height: 100px;
  position: absolute;
  border: none;
  background: #ffffff;
  box-shadow: 5px 5px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;

  &:active {
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
