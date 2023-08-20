import useBearStore from '@/stores/useBearStore';

function BearCount() {
  const bears = useBearStore((state) => state.bears);
  const increasePopulation = useBearStore((state) => state.increasePopulation);

  return (
    <div>
      <h1>{bears} 마리의 곰이 있네요..</h1>
      <button onClick={increasePopulation}>곰 증가시키기</button>
    </div>
  );
}

export default BearCount;
