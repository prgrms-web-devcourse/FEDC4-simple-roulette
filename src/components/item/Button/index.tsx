import React from 'react';
import styled from '@emotion/styled';

interface ButtonProps {
  label: string;
  color: 'white' | 'red' | 'blue' | 'gray';
  iconName: string;
  onClick: () => void;
}

const Button = ({ label = '', color = 'white', iconName = '', ...props }: Partial<ButtonProps>) => {
  return (
    <StyledButton
      color={color}
      {...props}>
      {iconName && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          width="12">
          <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
        </svg>
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
  padding: 15px;
  font-size: 16px;
  border-radius: 10px;
  text-align: center;

  &:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }
`;

export default Button;
