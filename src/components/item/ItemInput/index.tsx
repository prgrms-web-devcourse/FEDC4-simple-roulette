import styled from '@emotion/styled';

const Input = styled.input<{ borderColor?: string }>`
  width: 100%;
  height: 2.3em;
  border-radius: 5px;
  font-size: 1em;
  text-align: center;
  transition: all 0.25s;
  outline: none;
  :focus {
    box-shadow: ${({ borderColor }) => `0px 0px 1px 1px ${borderColor}`};
  }
`;

interface InputInit {
  inputType: string;
  width?: number;
  borderColor?: string;
}

const ItemInput = ({ inputType, width, borderColor, ...props }: InputInit) => {
  const InputStyle = {
    'max-width': `${width}em`,
    border: `1px solid ${borderColor}`
  };

  return (
    <Input
      {...props}
      type={inputType}
      style={InputStyle}
      borderColor={borderColor}></Input>
  );
};

export default ItemInput;
