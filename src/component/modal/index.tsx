import styled from '@emotion/styled';

const Modal = ({ width = 750, height = 500 }: { width?: number; height?: number }) => {
  const ModalBackground = styled.div({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)'
  });
  const Modal = styled.div({
    width,
    height,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto',
    borderRadius: 15,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: 'none',
    background: '#ffffff',
    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.10)'
  });
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
  const ResultLists = styled.div({
    width: '90%',
    height: '65%',
    border: 'solid black',
    marginTop: 30
  });
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
  return (
    <ModalBackground>
      <Modal>
        <ExitButton>X</ExitButton>
        <ResultTitle>결과 확인</ResultTitle>
        <ResultLists></ResultLists>
        <ResultDelete>결과 전체 삭제</ResultDelete>
      </Modal>
    </ModalBackground>
  );
};

export default Modal;
