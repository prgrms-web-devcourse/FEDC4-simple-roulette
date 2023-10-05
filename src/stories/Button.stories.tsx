import React from 'react';
import Button from '@/components/item/Button';

export default {
  component: Button,
  title: 'Button',
  argTypes: {
    label: { control: 'text' },
    color: {
      options: ['white', 'blue', 'red', 'gray'],
      control: 'radio'
    }
  }
};

interface ButtonProps {
  label?: string;
  size?: 'small' | 'large';
  color?: 'white' | 'red' | 'blue' | 'gray';
  onClick?: () => void;
}

export const btnsBlue = (args: ButtonProps) => {
  return (
    <Button
      {...args}
      label="여러 항목 추가"
      iconName="plus"
      color="blue"
    />
  );
};

export const btnsRed = (args: ButtonProps) => {
  return (
    <Button
      {...args}
      label="입력 취소"
      color="red"
    />
  );
};

export const btnsGrey = (args: ButtonProps) => {
  return (
    <Button
      {...args}
      label="항목 숨기기"
      color="gray"
    />
  );
};

export const btnsIcon = (args: ButtonProps) => {
  return (
    <Button
      {...args}
      iconName="plus"
    />
  );
};

export const btnsDefault = (args: ButtonProps) => {
  return <Button {...args} />;
};
