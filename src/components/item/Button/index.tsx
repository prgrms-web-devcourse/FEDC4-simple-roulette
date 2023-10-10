import React from 'react';
import styled from '@emotion/styled';
import Icon from '@/component/common/Icon';

interface ButtonProps {
  label: string;
  iconColor: string;
  color: 'white' | 'red' | 'blue' | 'gray';
  iconName: string;
  onClick: () => void;
}

const Button = ({ label = '', color = 'white', iconName = '', iconColor = '', ...props }: Partial<ButtonProps>) => {
  return (
    <StyledButton
      color={color}
      {...props}>
      {iconName && (
        <Icon
          size={20}
          color={iconColor}
          name={iconName}></Icon>
      )}
      {label}
    </StyledButton>
  );
};

const StyledButton = styled.button<{
  color: 'white' | 'red' | 'blue' | 'gray';
}>`
  color: ${({ color }) => (color === 'white' ? 'black' : 'white')};
  fill: ${({ color }) => (color === 'white' ? 'black' : 'white')};
  background-color: ${({ color }) => {
    if (color === 'white') return 'white';
    else if (color === 'blue') return '#4e74ff';
    else if (color === 'red') return '#ff4863';
    else if (color === 'gray') return 'gray';
  }};
  /* border: ${({ color }) => (color === 'white' ? '2px solid lightgray' : 'none')}; */
  border: none;
  box-shadow: ${({ color }) => color === 'white' && '0px 4px 16px rgba(0, 0, 0, 0.15)'};
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px;
  font-size: 16px;
  border-radius: 10px;
  text-align: center;

  &:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }
`;

export default Button;
