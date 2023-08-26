import type { Circle, ItemInfo } from './types';

/**
 * 룰렛에서 아이템의 배경을 그립니다.
 */
export const drawItemBackground = ({
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
};

/**
 * 룰렛에서 아이템의 텍스트를 그립니다.
 */
export const drawItemText = ({
  ctx,
  circle,
  radian,
  startAngle,
  text
}: {
  ctx: CanvasRenderingContext2D;
  circle: Circle;
  radian: number;
  startAngle: number;
  text: string;
}) => {
  const { centerX, centerY, radius } = circle;

  const textAngle = startAngle + radian / 2;
  const textX = centerX + (radius / 2) * Math.cos(textAngle);
  const textY = centerY + (radius / 2) * Math.sin(textAngle);

  ctx.save(); // 현재 캔버스 상태 저장
  ctx.translate(textX, textY); // 캔버스의 원점을 텍스트 위치로 이동
  ctx.rotate(textAngle); // 텍스트를 대각선으로 회전

  ctx.font = `bold 16px Raleway`;
  ctx.fillStyle = 'black';
  ctx.textAlign = 'center';
  ctx.fillText(text, 0, 0); // 회전한 캔버스에 텍스트를 그림
  ctx.restore();
};

/**
 * 비율 정보를 고려하여 해당 랜덤 숫자의 영역에 해당하는 아이템을 찾아 반환합니다.
 */
export const findResultItem = (items: ItemInfo[], randomValue: number) => {
  let accumulatedRatio = 0;

  for (const item of items) {
    const { checked, ratio } = item;
    if (!checked) continue;

    accumulatedRatio += ratio;

    if (randomValue < accumulatedRatio) {
      return item;
    }
  }

  return null;
};
