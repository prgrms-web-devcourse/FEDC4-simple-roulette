import styled from '@emotion/styled';

interface IconStyleProps {
  size: number;
  color: string;
}

interface IconProps extends IconStyleProps {
  name: string;
}

const MyIcon = styled.span<IconStyleProps>`
  font-size: ${(props) => props.size}px;
  color: ${(props) => props.color};
`;

const Icon: React.FC<IconProps> = ({ name, color, size, ...props }: IconProps) => {
  console.log('name:', name);
  return (
    <MyIcon
      className="material-symbols-outlined"
      size={size}
      color={color}
      {...props}>
      {name}
    </MyIcon>
  );
};

export default Icon;
