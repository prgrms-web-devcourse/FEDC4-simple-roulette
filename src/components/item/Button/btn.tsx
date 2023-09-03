import React from 'react';
import styled from '@emotion/styled';

interface ButtonProps {
  label: string;
  size: 'small' | 'large';
  color: 'white' | 'red' | 'blue';
  onClick: () => void;
}

const Button2 = ({ label = 'test', size = 'large', color = 'white', ...props }: Partial<ButtonProps>) => {
  return (
    <StyledButton
      size={size}
      color={color}
      {...props}>
      <span className="material-symbols-rounded">star</span>
      {label}
    </StyledButton>
  );
};

const StyledButton = styled.button<{
  size: 'small' | 'large';
  color: 'white' | 'red' | 'blue';
}>`
  width: ${({ size }) => (size === 'small' ? '48px' : '110px')};
  height: ${({ size }) => (size === 'small' ? '30px' : '50px')};
  font-size: ${({ size }) => (size === 'small' ? '12px' : '16px')};
  color: ${({ color }) => (color === 'white' ? 'black' : 'white')};
  background-color: ${({ color }) => {
    if (color === 'white') return 'white';
    else if (color === 'blue') return '#4e74ff';
    else if (color === 'red') return '#ff4863';
  }};
  border: ${({ color }) => (color === 'white' ? '2px solid lightgray' : 'none')};
  border-radius: 10px;
  text-align: center;

  cursor: pointer;
`;

export default Button2;
