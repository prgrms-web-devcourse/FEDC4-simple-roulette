import html from './item-section.html';
import './item-section.css';

function ItemSection() {
  const $wrapper = document.querySelector('#main .item-section');
  $wrapper.innerHTML = html;

  const $addButton = $wrapper.querySelector('.item-section__add-button');
  $addButton.addEventListener('click', e => {
    const $checkbox = document.createElement('input');
    $checkbox.setAttribute('type', 'checkbox');

    const $itemName = document.createElement('input');
    $itemName.setAttribute('type', 'text');
    $itemName.setAttribute('placeholder', '항목 이름');

    const $ratio = document.createElement('input');
    $ratio.setAttribute('type', 'number');
    $ratio.setAttribute('placeholder', '비율');

    const $newItem = document.createElement('li');
    $newItem.append($checkbox, $itemName, $ratio);

    const $list = $wrapper.querySelector('.item-section__list');
    $list.appendChild($newItem);
  });
}

export default ItemSection;
