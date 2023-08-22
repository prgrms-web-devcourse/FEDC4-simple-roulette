import styled from '@emotion/styled';
import { css } from '@emotion/react';

const TestButton = styled.button`
  background-color: red;
  color: white;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: none;
  outline: none;
  cursor: pointer;
`;

const meta = {
  title: 'Component/CssTest'
};

export default meta;

export const Default = () => (
  <div>
    <h1>Hello, Storybook!</h1>
    <p>This is a test for rendering JSX directly in Storybook.</p>
    <TestButton css={css({ height: '50px', backgroundColor: 'yellow', color: 'black' })}>테스트해보자</TestButton>
  </div>
);
