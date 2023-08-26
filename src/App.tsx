import Roulette from '@/components/Roulette';

function App() {
  return (
    <div>
      <Roulette
        items={[
          {
            checked: true,
            value: '피자',
            ratio: 1
          },
          {
            checked: true,
            value: '냉면',
            ratio: 1
          },
          {
            checked: true,
            value: '치킨',
            ratio: 1
          },
          {
            checked: true,
            value: '족발',
            ratio: 1
          }
        ]}
        colors={['#E879F9', '#FB7185', '#4ADE80', '#22D3EE', '#818CF8', '#A5B4FC']}
      />
    </div>
  );
}

export default App;
