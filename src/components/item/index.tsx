import styled from '@emotion/styled';
import Button from './Button';
import ItemList from './ItemList';
import { pageStore } from '@/store/store';
import { useStore } from 'zustand';
import { useState } from 'react';

const ItemSection = styled.div`
  width: 100%;
  max-width: 50em;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const ItemSectionHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1em;
`;

const ItemSectionFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
`;

const ItemSectionList = styled.div`
  height: 30em;
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5em;
  border: 2px solid #2a58fe4e;
  border-radius: 15px;
  box-shadow: 2px 10px 11px 5px rgba(211, 211, 211, 0.75);
  overflow-y: scroll;
`;

const TextAreaWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
const BtnWrapper = styled.div`
  display: flex;
  gap: 1em;
  justify-content: flex-end;
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 200px;
  padding: 10px;
  box-sizing: border-box;
  border: solid 2px #1e90ff;
  border-radius: 5px;
  font-size: 16px;
  resize: none; /* 사용자 임의 변경 불가 */

  justify-content: flex-end;
`;

function Item() {
  const { addItem, items, clearItems } = useStore(pageStore);
  const [textareaVisible, setTextareaVisible] = useState(false);

  const textareaToggle = () => {
    setTextareaVisible((prev) => !prev);
  };

  return (
    <ItemSection>
      <ItemSectionHeader>
        <Button
          iconName="+"
          onClick={clearItems}></Button>
      </ItemSectionHeader>
      <ItemSectionList>
        {items.map((item, idx) => (
          <ItemList key={idx} />
        ))}
        {textareaVisible && (
          <TextAreaWrapper>
            <TextArea></TextArea>
            <BtnWrapper>
              <Button
                iconName="+"
                label="작성 완료"
                color="blue"></Button>
              <Button
                iconName="+"
                label="입력 취소"
                color="red"
                onClick={textareaToggle}></Button>
            </BtnWrapper>
          </TextAreaWrapper>
        )}
      </ItemSectionList>
      <ItemSectionFooter>
        <Button
          iconName="+"
          label="여러 항목 추가"
          color="blue"
          onClick={textareaToggle}></Button>
        <Button
          iconName="+"
          label="항목 추가"
          color="blue"
          onClick={addItem}></Button>
      </ItemSectionFooter>
    </ItemSection>
  );
}

export default Item;
