import html from './item-section.html';
import { addItem } from './item/item';
import './item-section.css';

function ItemSection() {
  const $wrapper = document.querySelector('#main .item-section');
  $wrapper.innerHTML = html;

  const $addButton = $wrapper.querySelector('.item-section__add-button');
  $addButton.addEventListener('click', e => addItem());
}

export default ItemSection;
