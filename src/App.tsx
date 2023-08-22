import { useState } from 'react';
import { css } from '@emotion/react';
import Button from '@/components/Button';
import BearCount from './components/BearCount';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button
          onClick={() => {
            setCount((count) => count + 1);
          }}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <Button>기본 스타일 버튼</Button>
      <Button css={css({ backgroundColor: 'yellow', color: 'black', width: '1000px' })}>덮어쓴 버튼</Button>
      <BearCount />
    </>
  );
}

export default App;
