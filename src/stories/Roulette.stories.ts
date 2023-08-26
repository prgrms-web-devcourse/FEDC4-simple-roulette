import type { Meta, StoryObj } from '@storybook/react';
import Roulette from '@/components/Roulette';

const meta = {
  title: 'Component/Roulette',
  component: Roulette
} satisfies Meta<typeof Roulette>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: ['떡볶이', '돈가스', '초밥', '피자', '냉면', '치킨', '족발', '곰', '삼겹살'],
    colors: ['#E879F9', '#FB7185', '#4ADE80', '#22D3EE', '#818CF8', '#A5B4FC']
  }
};

export const Three: Story = {
  args: {
    items: ['떡볶이', '돈가스', '초밥'],
    colors: ['#E879F9', '#FB7185', '#4ADE80', '#22D3EE', '#818CF8', '#A5B4FC']
  }
};

export const Four: Story = {
  args: {
    items: ['떡볶이', '돈가스', '초밥', '피자'],
    colors: ['#E879F9', '#FB7185', '#4ADE80', '#22D3EE', '#818CF8', '#A5B4FC']
  }
};
