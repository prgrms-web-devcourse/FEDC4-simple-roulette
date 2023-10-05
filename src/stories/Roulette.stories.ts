import type { Meta, StoryObj } from '@storybook/react';
import Roulette, { COLORS } from '@/components/Roulette';

const meta = {
  title: 'Component/Roulette',
  component: Roulette
} satisfies Meta<typeof Roulette>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      {
        checked: true,
        value: '떡볶이',
        ratio: 1
      },
      {
        checked: true,
        value: '돈가스',
        ratio: 2
      },
      {
        checked: true,
        value: '초밥',
        ratio: 1
      },
      {
        checked: true,
        value: '피자',
        ratio: 1
      },
      {
        checked: true,
        value: '냉면',
        ratio: 1
      },
      {
        checked: true,
        value: '치킨',
        ratio: 1
      },
      {
        checked: true,
        value: '족발',
        ratio: 1
      },
      {
        checked: true,
        value: '랍스터',
        ratio: 1
      },
      {
        checked: true,
        value: '삼겹살',
        ratio: 1
      }
    ],
    colors: COLORS
  }
};

export const Three: Story = {
  args: {
    items: [
      {
        checked: true,
        value: '떡볶이',
        ratio: 1
      },
      {
        checked: true,
        value: '돈가스',
        ratio: 1
      },
      {
        checked: true,
        value: '초밥',
        ratio: 1
      }
    ],
    colors: COLORS
  }
};

export const Four: Story = {
  args: {
    items: [
      {
        checked: true,
        value: '피자',
        ratio: 1
      },
      {
        checked: true,
        value: '냉면',
        ratio: 1
      },
      {
        checked: true,
        value: '치킨',
        ratio: 1
      },
      {
        checked: true,
        value: '족발',
        ratio: 1
      }
    ],
    colors: COLORS
  }
};

export const Ten: Story = {
  args: {
    items: [
      {
        checked: true,
        value: '일',
        ratio: 1
      },
      {
        checked: true,
        value: '이이',
        ratio: 1
      },
      {
        checked: true,
        value: '삼삼삼',
        ratio: 1
      },
      {
        checked: true,
        value: '사사사사',
        ratio: 1
      },
      {
        checked: true,
        value: '오오오오오',
        ratio: 1
      },
      {
        checked: true,
        value: '육육육육육육',
        ratio: 1
      },
      {
        checked: true,
        value: '칠칠칠칠칠칠칠',
        ratio: 1
      },
      {
        checked: true,
        value: '팔팔팔팔팔팔팔팔',
        ratio: 1
      },
      {
        checked: true,
        value: '구구구구구구구구구',
        ratio: 1
      },
      {
        checked: true,
        value: '십십십십십십십십십십',
        ratio: 1
      }
    ],
    colors: COLORS
  }
};

export const Thirty: Story = {
  args: {
    items: Array.from({ length: 30 }).map((_, index) => ({
      checked: true,
      value: `Item ${index + 1}`,
      ratio: 1
    })),
    colors: COLORS
  }
};

export const Fifty: Story = {
  args: {
    items: Array.from({ length: 50 }).map((_, index) => ({
      checked: true,
      value: `Item ${index + 1}`,
      ratio: 1
    })),
    colors: COLORS
  }
};

export const Hundred: Story = {
  args: {
    items: Array.from({ length: 100 }).map((_, index) => ({
      checked: true,
      value: `Item ${index + 1}`,
      ratio: 1
    })),
    colors: COLORS
  }
};
