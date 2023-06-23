export default class RoulletSection {
  constructor({ $target, initialState }) {
    this.state = initialState;
    
    this.$wrapper = document.createElement('section');
    this.$wrapper.className = 'roullet-section';
    $target.appendChild(this.$wrapper);
    
    this.render();
  }

  render() {
    this.$wrapper.innerHTML = '룰렛을 렌더링 할 위치';
  }
}
