import styled from '@emotion/styled';

const Input = styled.input<{ borderColor?: string }>`
  height: 2.5em;
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
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  value?: string;
  ratio?: number;
  checked?: boolean;
}

const ItemInput = ({ inputType, width, borderColor, onChange, value, ratio, checked, ...props }: InputInit) => {
  const InputStyle = {
    width: `${width}em`,
    border: `1px solid ${borderColor}`
  };
  return (
    <>
      {ratio !== undefined ? (
        <Input
          {...props}
          checked={checked}
          type={inputType}
          style={InputStyle}
          borderColor={borderColor}
          onChange={onChange}
          value={ratio || 0}></Input>
      ) : (
        <Input
          {...props}
          checked={checked}
          type={inputType}
          style={InputStyle}
          borderColor={borderColor}
          onChange={onChange}
          value={value ?? ''}
          placeholder="항목 이름"></Input>
      )}
    </>
  );
};

export default ItemInput;
