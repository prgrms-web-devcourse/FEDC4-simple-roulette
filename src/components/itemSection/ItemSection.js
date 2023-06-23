import html from './ItemSection.html';
import './ItemSection.css';

export default class ItemSection {
  constructor({ $target, initialState }) {
    $target.innerHTML = html;
    this.$list = $target.querySelector('.item-section__list');

    this.state = initialState;
    this.render();
  }

  render() {
    this.$list.innerHTML = '하하호호 여기에 항목 요소들 보여줄 겁니다';
  }
}
