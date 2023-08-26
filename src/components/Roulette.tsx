import { useEffect, useRef, useCallback } from 'react';

interface Props {
  items: string[];
  colors: string[];
}

const Roulette = ({ items, colors }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const arc = Math.PI / (items.length / 2);

  const drawItemArcs = useCallback(
    (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
      const [itemWidth, itemHeight] = [canvas.width / 2, canvas.height / 2];

      items.forEach((_, i) => {
        ctx.beginPath();
        ctx.fillStyle = colors[i % (colors.length - 1)];
        ctx.moveTo(itemWidth, itemHeight);
        ctx.arc(itemWidth, itemHeight, itemWidth, arc * (i - 1), arc * i);
        ctx.fill();

        if (items.length > 1) {
          ctx.stroke();
        }

        ctx.closePath();
      });
    },
    [items, colors, arc]
  );

  const drawItemTexts = useCallback(
    (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) => {
      items.forEach((item, i) => {
        const [itemWidth, itemHeight] = [canvas.width / 2, canvas.height / 2];
        const angle = arc * i + arc / 2;

        ctx.save();
        ctx.translate(itemWidth + Math.cos(angle) * (itemWidth - 50), itemHeight + Math.sin(angle) * (itemHeight - 50));
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
        const rotate = result * arc + 1200 + arc * 3;

        canvas.style.transform = `rotate(-${rotate}deg)`;
        canvas.style.transition = `2s`;
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
    }, 2000);
  }, [items, rotateRoulette]);

  return (
    <>
      <canvas
        width={500}
        height={500}
        ref={canvasRef}
      />
      <button onClick={handleClick}>돌리고돌리고~</button>
    </>
  );
};

export default Roulette;
