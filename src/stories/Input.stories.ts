import type { Meta, StoryObj } from '@storybook/react';
import Input from '@/components/item/ItemInput';

const meta = {
  title: 'Component/Input',
  component: Input,
  argTypes: {
    inputType: {
      options: ['checkbox', 'text'],
      control: { type: 'radio' }
    },
    width: {
      control: { type: 'number' }
    },
    borderColor: {
      control: { type: 'color' }
    },
    focusColor: {
      control: { type: 'color' }
    }
  }
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
