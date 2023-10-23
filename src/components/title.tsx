import styled from '@emotion/styled';

const Title = () => {
  const Title = styled.div({
    width: 1000,
    height: 70,
    margin: 'auto'
  });
  const MainTitle = styled.h1({
    fontSize: 30,
    color: '#557AFE',
    marginTop: 30,
    textAlign: 'center'
  });
  const SubTitle = styled.p({
    fontSize: 15,
    color: '#121828',
    marginTop: 20,
    textAlign: 'center'
  });
  return (
    <>
      <Title>
        <MainTitle>럭키?! 언럭키?!</MainTitle>
        <SubTitle>🍀 행운을 빌어요 🍀</SubTitle>
      </Title>
    </>
  );
};
export default Title;
