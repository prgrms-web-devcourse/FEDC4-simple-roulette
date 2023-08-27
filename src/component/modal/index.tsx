import styled from '@emotion/styled';

const Modal = ({ width = 750, height = 500 }: { width?: number; height?: number }) => {
  const Modal = styled.div({
    width,
    height,
    border: 'solid black',
    position: 'absolute',
    marginLeft: '-50px',
    marginRight: '-50px',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 'auto',
    borderRadius: 15
  });
  const ExitButton = styled.button({
    fontSize: 20
  });
  const ResultTitle = styled.p({
    fontSize: 30,
    color: '#557AFE',
    textAlign: 'center',
    border: 'solid black'
  });
  return (
    <Modal>
      <ExitButton>X</ExitButton>
      <ResultTitle>결과 확인</ResultTitle>
    </Modal>
  );
};

export default Modal;
