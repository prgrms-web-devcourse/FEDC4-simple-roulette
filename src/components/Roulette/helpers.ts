import type { ItemInfo, Ratio } from './types';

/**
 * 전체 아이템의 비율 정보를 고려하여 랜덤 숫자를 생성합니다.
 */
export const findRandomRatio = (items: ItemInfo[]): Ratio => {
  const totalRatio = items.reduce((acc, { checked, ratio }) => (!checked ? acc : acc + ratio), 0);
  const randomRatio = Math.floor(Math.random() * totalRatio);

  return { random: randomRatio, total: totalRatio };
};

/**
 * 랜덤 숫자를 기반으로 아이템을 찾습니다.
 */
export const findItemByRatio = (items: ItemInfo[], randomRatio: number) => {
  let accumulatedRatio = 0;

  for (const item of items) {
    const { checked, ratio } = item;
    if (!checked) continue;

    accumulatedRatio += ratio;

    if (randomRatio < accumulatedRatio) {
      return item;
    }
  }

  return null;
};
