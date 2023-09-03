import styled from '@emotion/styled';
import ItemInput from '../ItemInput';
import { css } from '@emotion/react';

const ItemListContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const ItemInputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  gap: 20px;
`;

const Span = styled.div`
  width: 1.5em;
  display: inline-block;
  position: absolute;
  margin-left: 1em;
  border-right: 1px solid #2a59fe;
`;

const ItemList = () => {
  return (
    <ItemListContainer>
      <ItemInput
        inputType="checkbox"
        width={1.2}></ItemInput>
      <ItemInputContainer>
        <Span>1</Span>
        <ItemInput
          inputType="text"
          borderColor="#5c7fff9e"
          width={20}
          css={css`
            padding-left: 45px;
          `}></ItemInput>
        <ItemInput
          inputType="text"
          borderColor="#7f7f7f9e"
          width={4}></ItemInput>
      </ItemInputContainer>
    </ItemListContainer>
  );
};

export default ItemList;
