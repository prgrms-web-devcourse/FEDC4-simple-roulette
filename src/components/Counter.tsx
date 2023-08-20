import { useState, useCallback } from 'react';
import { css } from '@emotion/react';
import Button from './Button';

interface Props {
  defaultCount?: number;
  onIncrease?: () => void;
  children?: React.ReactNode;
}

function Counter({ defaultCount, onIncrease = () => {}, children }: Props) {
  const [count, setCount] = useState(defaultCount ?? 0);

  const handleIncrease = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
    onIncrease();
  }, [onIncrease]);

  return (
    <div>
      <div>{count}</div>
      <Button
        css={css({ height: '50px', backgroundColor: 'yellow', color: 'black' })}
        onClick={handleIncrease}>
        증가
      </Button>
      <Button css={css({ backgroundColor: 'yellow', color: 'black', width: '1000px' })}>버튼</Button>
    </div>
  );
}

export default Counter;
