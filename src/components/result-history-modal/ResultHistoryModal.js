export default class ResultHistoryModal {
  constructor({ $target, initialState }) {
    this.state = initialState;
    
    this.$wrapper = document.createElement('div');
    this.$wrapper.className = 'history-modal';
    $target.appendChild(this.$wrapper);
    
    this.render();
  }

  render() {
    this.$wrapper.innerHTML = '흐으음 모달 요소';
  }
}
