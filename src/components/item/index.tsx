import styled from '@emotion/styled';
import Button from './Button';
import ItemList from './ItemList';
import { pageStore } from '@/store/store';
import { useStore } from 'zustand';
import { useState } from 'react';
import { v4 } from 'uuid';

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
  border: 2px solid #2a58fe4e;
  border-radius: 15px;
  box-shadow: 2px 10px 11px 5px rgba(211, 211, 211, 0.75);
  overflow-y: scroll;
`;

const ItemListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5em;
`;

const TextAreaWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-top: 1em;
`;

const BtnWrapper = styled.div`
  display: flex;
  gap: 1em;
  justify-content: flex-end;
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 150px;
  padding: 10px;
  box-sizing: border-box;
  border: solid 2px #1e90ff;
  border-radius: 5px;
  font-size: 16px;
  resize: none; /* 사용자 임의 변경 불가 */
`;

function Item() {
  const { addItem, items, clearItems } = useStore(pageStore);
  const [textareaVisible, setTextareaVisible] = useState(false);
  const [textareaContent, setTextareaContent] = useState('');

  const textareaToggle = () => {
    setTextareaVisible((prev) => !prev);
  };

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaContent(event.target.value);
  };

  const handleAddItemClick = () => {
    const values = textareaContent.split('\n').filter((val) => val.trim() !== '');

    const newItems = values.map((value) => ({
      checked: true,
      value: value.trim(),
      ratio: 1,
      id: v4()
    }));

    addItem(newItems);
    handleCancelClick();
  };

  const handleCancelClick = () => {
    setTextareaContent('');
    setTextareaVisible(false);
  };

  return (
    <ItemSection>
      <ItemSectionHeader>
        <Button
          iconName="restart_alt"
          onClick={clearItems}></Button>
      </ItemSectionHeader>
      <ItemSectionList>
        <ItemListWrapper>
          {items.map((item, idx) => (
            <ItemList
              key={item.id}
              id={item.id}
              value={item.value}
              ratio={item.ratio}
              index={idx}
              checked={item.checked}
            />
          ))}
        </ItemListWrapper>

        {textareaVisible && (
          <TextAreaWrapper>
            <TextArea
              value={textareaContent}
              onChange={handleTextareaChange}></TextArea>
            <BtnWrapper>
              <Button
                iconName="add"
                label="작성 완료"
                color="blue"
                onClick={handleAddItemClick}></Button>
              <Button
                iconName="remove"
                label="입력 취소"
                color="red"
                onClick={handleCancelClick}></Button>
            </BtnWrapper>
          </TextAreaWrapper>
        )}
      </ItemSectionList>
      <ItemSectionFooter>
        <Button
          iconName="add"
          label="여러 항목 추가"
          color="blue"
          onClick={textareaToggle}></Button>
        <Button
          iconName="add"
          label="항목 추가"
          color="blue"
          onClick={() => {
            addItem(undefined);
          }}></Button>
      </ItemSectionFooter>
    </ItemSection>
  );
}

export default Item;
