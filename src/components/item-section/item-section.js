import html from './item-section.html';
import { handleAddItem, handleRefreshList } from './item/events.js';
import './item-section.css';
import './item/item.css';
import { addItem } from './item/states.js';
import { getItem, storage } from './item/storage.js';

function ItemSection() {
  const $wrapper = document.querySelector('#main .item-section');
  $wrapper.innerHTML = html;

  const $refreshButton = $wrapper.querySelector('.item-section__refresh-button');
  $refreshButton.addEventListener('click', () => handleRefreshList());


  const $addButton = $wrapper.querySelector('.item-section__add-button');
  $addButton.addEventListener('click', () => {
    const newItem = addItem();
    if (!newItem) return;
    console.log(newItem)
    handleAddItem(newItem);
  });

  const newItem = addItem();
  if (!newItem) return;
  const initialState = storage.getItem('item_lists',newItem);
  initialState.map((e) => {
    handleAddItem(e)
  })
}

export default ItemSection;
