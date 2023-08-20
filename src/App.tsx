import Button from '@/components/Button';
import Counter from '@/components/Counter';
import BearCount from './components/BearCount';
import { css } from '@emotion/react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <Button css={css({ backgroundColor: 'yellow', color: 'black', width: '1000px' })}>버튼</Button>
      <Counter />
      <BearCount />
    </div>
  );
}

export default App;
