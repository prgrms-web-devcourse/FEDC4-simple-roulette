import Roulette from './components/Roulette';

function App() {
  return (
    <div>
      <Roulette
        product={['떡볶이', '돈가스', '초밥', '피자', '냉면', '치킨', '족발', '피자', '삼겹살']}
        colors={['#E879F9', '#FB7185', '#4ADE80', '#22D3EE', '#818CF8', '#A5B4FC']}
      />
    </div>
  );
}

export default App;
