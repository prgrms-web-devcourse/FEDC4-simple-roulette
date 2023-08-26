import { useEffect, useRef, useCallback } from 'react';
import styled from '@emotion/styled';

interface Props {
  items: string[];
  colors: string[];
}

const ROTATE_DURATION = 2000;
const ROTATE_COUNT = 3;
const ROTATE_DEGREE = 360 * ROTATE_COUNT;

const Roulette = ({ items, colors }: Props) => {
  const arc = Math.PI / (items.length / 2);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const drawItemArcs = useCallback(
    (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
      const [centerX, centerY] = [canvas.width / 2, canvas.height / 2];

      items.forEach((_, i) => {
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = colors[i % (colors.length - 1)];
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, centerX, arc * (i - 1), arc * i);
        ctx.fill();

        if (items.length > 1) {
          ctx.stroke();
        }

        ctx.closePath();
        ctx.restore();
      });
    },
    [items, colors, arc]
  );

  const drawItemTexts = useCallback(
    (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
      items.forEach((item, i) => {
        const [centerX, centerY] = [canvas.width / 2, canvas.height / 2];
        const angle = arc * i + arc / 2;

        ctx.save();
        ctx.translate(centerX + Math.cos(angle) * (centerX - 50), centerY + Math.sin(angle) * (centerY - 50));
        ctx.rotate(angle + Math.PI / 2);

        // 항목명에 띄어쓰기가 있을 시 줄바꿈
        item.split(' ').forEach((text, j) => {
          ctx.fillText(text, 0, 30 * j);
        });

        ctx.restore();
      });
    },
    [items, arc]
  );

  const rotateRoulette = useCallback(
    (canvas: HTMLCanvasElement) => {
      const result = Math.floor(Math.random() * items.length);

      canvas.style.transform = `initial`;
      canvas.style.transition = `initial`;

      setTimeout(() => {
        const arc = 360 / items.length;
        const rotate = result * arc + 3600 + arc * 3 - arc / 4;

        canvas.style.transform = `rotate(-${rotate}deg)`;
        canvas.style.transition = `${ROTATE_DURATION}ms`;
      }, 0);

      return result;
    },
    [items.length]
  );

  useEffect(() => {
    if (!canvasRef.current) return;
    if (!canvasRef.current.getContext) return;
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    // 룰렛 아이템 그리기
    ctx.strokeStyle = '#DBDBDB';
    drawItemArcs(canvasRef.current, ctx);

    // 룰렛 아이템 텍스트 그리기
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.font = '30px sans-serif';
    drawItemTexts(canvasRef.current, ctx);
  }, [drawItemArcs, drawItemTexts]);

  const handleClick = useCallback(() => {
    if (!canvasRef.current) return;
    const result = rotateRoulette(canvasRef.current);

    setTimeout(() => {
      alert(`${items[result]} 당첨!`);
    }, ROTATE_DURATION);
  }, [items, rotateRoulette]);

  return (
    <RouletteContainer>
      <CursorContainer>
        <Cursor
          src="/rouletteCursor.svg"
          alt="커서"
        />
      </CursorContainer>
      <CanvasContainer>
        <canvas
          width={500}
          height={500}
          ref={canvasRef}
        />
        <StartButton onClick={handleClick}>START</StartButton>
      </CanvasContainer>
    </RouletteContainer>
  );
};

export default Roulette;

const RouletteContainer = styled.div`
  width: fit-content;
`;

const CanvasContainer = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CursorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Cursor = styled.img`
  position: absolute;
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
