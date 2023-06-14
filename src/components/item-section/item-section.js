import html from './item-section.html';
import { handleAddItem, handleRefreshList } from './item/events.js';
import './item-section.css';
import './item/item.css';

function ItemSection() {
  const $wrapper = document.querySelector('#main .item-section');
  $wrapper.innerHTML = html;

  const $refreshButton = $wrapper.querySelector('.item-section__refresh-button');
  $refreshButton.addEventListener('click', () => handleRefreshList());

  const $addButton = $wrapper.querySelector('.item-section__add-button');
  $addButton.addEventListener('click', () => handleAddItem());

  handleAddItem();
}

export default ItemSection;
