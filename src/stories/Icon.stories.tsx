import type { Meta, StoryObj } from '@storybook/react';

import Icon from '../component/common/Icon';

const meta = {
  component: Icon,
  title: 'Icon',
  argTypes: {
    size: { control: 'number' },
    color: { control: 'color' }
  }
} satisfies Meta<typeof Icon>;

export default meta;

export const Default: StoryObj<typeof Icon> = {
  args: {
    name: 'search'
  },
  render: (args) => <Icon {...args} />
};
