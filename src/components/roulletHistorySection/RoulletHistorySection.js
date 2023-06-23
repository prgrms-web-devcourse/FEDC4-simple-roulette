export default class RoulletHistorySection {
  constructor({ $target, initialState }) {
    this.$target = $target;

    this.state = initialState;
    this.render();
  }

  render() {
    this.$target.innerHTML = '흐으음 모달 요소';
  }
}
