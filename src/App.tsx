import Item from '@/components/item';
import Title from '@/components/title';
import Roulette, { COLORS } from '@/components/Roulette';
import { pageStore } from '@/store/store';
import { resultStore } from '@/store/resultStore';
import { useStore } from 'zustand';
import Button from '@/components/item/Button';
import Modal from '@/components/modal';
import { useState } from 'react';
function App() {
  const { items, toggleCheckbox } = useStore(pageStore);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const { results } = useStore(resultStore);
  const [resultValue, resultId] = results.length ? results[results.length - 1] : [null, null];
  let result = items[0];

  const handleCheck = () => {
    for (let i = 0; i < items.length; i++) {
      if (resultId === items[i].id) {
        toggleCheckbox(resultId);
        result = items[i];
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

  return (
    <div>
      <Title />
      <div>{results.length ? <div>{resultValue}</div> : <div>결과 당첨!</div>}</div>
      <Button
        label={result?.checked ? '항목 숨기기' : '숨기기 취소'}
        color={'gray'}
        onClick={handleCheck}
      />
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
    </div>
  );
}

export default App;
