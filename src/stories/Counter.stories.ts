import type { Meta, StoryObj } from '@storybook/react';
import Counter from '@/components/Counter';

const meta = {
  title: 'Component/Counter',
  component: Counter,
  argTypes: { onIncrease: { action: 'increase' } }
} satisfies Meta<typeof Counter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultCount: 0
  }
};

export const Ten: Story = {
  args: {
    defaultCount: 10
  }
};
