export default class RoulletSection {
  constructor({ $target, initialState }) {
    this.$target = $target;

    this.state = initialState;
    this.render();
  }

  render() {
    this.$target.innerHTML = '룰렛을 렌더링 할 위치';
  }
}
