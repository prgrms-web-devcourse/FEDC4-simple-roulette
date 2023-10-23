import styled from '@emotion/styled';
import { resultStore } from '@/store/resultStore';
import { useStore } from 'zustand';
import { ItemInputContainer, Span } from '../item/ItemList';
import ItemInput from '../item/ItemInput';
import { css } from '@emotion/react';

interface ModalProps {
  width?: number;
  height?: number;
  handleModal?: () => void;
}

const Modal = ({ width = 750, height = 500, handleModal }: ModalProps) => {
  const { results, clearItems } = useStore(resultStore);

  const handleDeleteResult = () => {
    clearItems();
  };

  return (
    <ModalBackground>
      <ResultModal
        width={width}
        height={height}>
        <ExitButton onClick={handleModal}>X</ExitButton>
        <ResultTitle>결과 확인</ResultTitle>
        <ResultLists>
          {results.map((x, index) => {
            return (
              <ItemInputContainer key={index}>
                <Span>{index + 1}</Span>
                <ItemInput
                  value={x[0]}
                  inputType="text"
                  borderColor="#5c7fff9e"
                  width={35}
                  disabled
                  css={css`
                    padding-left: 45px;
                    margin: 10px 0px;
                  `}></ItemInput>
              </ItemInputContainer>
            );
          })}
        </ResultLists>
        <ResultDelete onClick={handleDeleteResult}>결과 전체 삭제</ResultDelete>
      </ResultModal>
    </ModalBackground>
  );
};

export default Modal;
const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;
const ResultModal = styled.div<ModalProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
`;
const ExitButton = styled.button({
  fontSize: 20,
  fontWeight: 'bold',
  border: 'none',
  background: 'none',
  marginLeft: '95%',
  marginTop: 5,
  '&:hover': {
    cursor: 'pointer'
  }
});
const ResultTitle = styled.p({
  fontSize: 30,
  color: '#557AFE'
});
const ResultLists = styled.div`
  height: 70%;
  margin-top: 10px;
  overflow-y: auto;
`;
const ResultDelete = styled.button({
  fontSize: 18,
  margin: 'auto',
  width: 145,
  height: 44,
  border: 'none',
  background: '#ffffff',
  boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.10)',
  borderRadius: 4,
  '&:hover': {
    cursor: 'pointer'
  }
});
