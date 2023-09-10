import styled from '@emotion/styled';
import Button from './Button';
import ItemList from './ItemList';
import { pageStore } from '@/store/store';
import { useStore } from 'zustand';

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
`;

function Item() {
  const { addItem, items, clearItems } = useStore(pageStore);

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
      </ItemSectionList>
      <ItemSectionFooter>
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
