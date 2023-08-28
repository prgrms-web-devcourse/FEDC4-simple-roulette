import type { Meta, StoryObj } from '@storybook/react';
import Roulette from '@/components/roulette';

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
    colors: ['#E879F9', '#FB7185', '#4ADE80', '#22D3EE', '#818CF8', '#A5B4FC']
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
    colors: ['#E879F9', '#FB7185', '#4ADE80', '#22D3EE', '#818CF8', '#A5B4FC']
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
    colors: ['#E879F9', '#FB7185', '#4ADE80', '#22D3EE', '#818CF8', '#A5B4FC']
  }
};
