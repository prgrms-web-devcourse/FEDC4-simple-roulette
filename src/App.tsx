import Item from '@/components/item';
import Title from '@/components/title';
import Roulette, { COLORS } from '@/components/Roulette';
import { pageStore } from '@/store/store';
import { resultStore } from '@/store/resultStore';
import { useStore } from 'zustand';
import Button from '@/components/item/Button';
import Modal from '@/components/modal';
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LastResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;
const LastResultDiv = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #68759d;
`;
function App() {
  const { items, toggleCheckbox } = useStore(pageStore);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [result, setResult] = useState(items[0]);
  const { results } = useStore(resultStore);
  const [resultValue, resultId] = results.length ? results[results.length - 1] : [null, null];

  const handleCheck = () => {
    for (let i = 0; i < items.length; i++) {
      if (resultId === items[i].id) {
        toggleCheckbox(resultId);
        setResult(items[i]);
        break;
      }
    }
  };
  const handleModal = () => {
    if (modalOpen) {
      document.body.style.overflow = 'auto';
    } else {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'hidden';
    }
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    for (let i = 0; i < items.length; i++) {
      if (resultId === items[i].id) {
        setResult(items[i]);
        break;
      }
    }
  }, [items, result, resultId]);

  return (
    <Container>
      <Title />
      <LastResultContainer>
        <LastResultDiv>{results.length ? <div>{resultValue}</div> : <div>결과 당첨!</div>}</LastResultDiv>
        <Button
          label={result?.checked ? '항목 숨기기' : '숨기기 취소'}
          color={'gray'}
          onClick={handleCheck}
          css={css`
            margin: 10px 0px;
            height: 2rem;
          `}
        />
      </LastResultContainer>
      <Roulette
        items={items}
        colors={COLORS}
      />
      <Button
        label={'결과 내역'}
        onClick={handleModal}
      />
      {modalOpen && <Modal handleModal={handleModal} />}
      <Item />
    </Container>
  );
}

export default App;
