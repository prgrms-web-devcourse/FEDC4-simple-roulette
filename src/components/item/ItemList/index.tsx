import styled from '@emotion/styled';
import ItemInput from '../ItemInput';
import { css } from '@emotion/react';
import Button from '../Button';
import { useStore } from 'zustand';
import { pageStore } from '@/store/store';

const ItemListContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
`;

export const ItemInputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  gap: 20px;
`;

export const Span = styled.div`
  width: 1.5em;
  display: inline-block;
  position: absolute;
  margin-left: 1em;
  border-right: 1px solid #2a59fe;
`;

interface ItemListProps {
  id: string;
  value: string;
  ratio: number;
  index: number;
  checked: boolean;
}

const ItemList = ({ id, value, ratio, index, checked }: ItemListProps) => {
  const { toggleCheckbox, setValue, setRatio, removeItem } = useStore(pageStore);

  const handleRemoveItemClick = () => {
    removeItem(id);
  };

  return (
    <ItemListContainer>
      <ItemInput
        onChange={() => {
          toggleCheckbox(id);
        }}
        inputType="checkbox"
        checked={checked}
        width={1.7}></ItemInput>
      <ItemInputContainer>
        <Span>{index + 1}</Span>
        <ItemInput
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            const target = e.target as HTMLInputElement;
            setValue({ id, value: target.value });
          }}
          value={value}
          inputType="text"
          borderColor="#5c7fff9e"
          width={28}
          css={css`
            padding-left: 45px;
          `}></ItemInput>
        <ItemInput
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            const target = e.target as HTMLInputElement;
            const newRatio = Number(target.value.replace(/[^0-9.]/g, '')) || 0;
            setRatio({ id, ratio: newRatio });
          }}
          ratio={ratio}
          inputType="text"
          borderColor="#7f7f7f9e"
          width={5}></ItemInput>
        <Button
          iconName="remove"
          onClick={handleRemoveItemClick}></Button>
      </ItemInputContainer>
    </ItemListContainer>
  );
};

export default ItemList;
