import html from './ItemSection.html';
import './ItemSection.css';

export default class ItemSection {
  constructor({ $target, initialState }) {
    this.state = initialState;
    
    this.$wrapper = document.createElement('section');
    this.$wrapper.className = 'item-section';
    this.$wrapper.insertAdjacentHTML('afterbegin', html);
    $target.appendChild(this.$wrapper);

    this.$list = this.$wrapper.querySelector('.item-section__list');

    this.render();
  }

  render() {
    this.$list.innerHTML = '하하호호 여기에 항목 요소들 보여줄 겁니다';
  }
}
