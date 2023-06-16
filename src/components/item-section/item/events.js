import {
  createCheckbox,
  createRatio,
  createItemName,
  createCloseIcon,
  createListItem,
  createRemoveButton,
  updateListCount,
} from './elements.js';
import { addItem, removeItem, refreshList } from './states.js';

/**
 * 항목 아이템을 생성하여 문서에 추가합니다.
 */
export const handleAddItem = () => {
  const newItem = addItem();
  if (!newItem) return;

  const $list = document.querySelector('#main .item-section__list');

  const $listItem = createListItem(newItem.key);
  const $checkbox = createCheckbox(newItem.checked);
  const $itemName = createItemName(newItem.key);
  const $ratio = createRatio(newItem.key,newItem.ratio);
  const $removeButton = createRemoveButton(createCloseIcon());

  $listItem.append($checkbox, $itemName, $ratio, $removeButton);
  $list.appendChild($listItem);

  updateListCount();
};

/**
 * 항목에서 X 아이콘을 클릭하면 해당 항목을 제거합니다.
 */
export const handleRemoveItem = e => {
  const key = Number(e.currentTarget.closest('li')?.getAttribute('data-key'));
  if (isNaN(key)) return;
  removeItem(key);
  updateListCount();

  const $item = document.querySelector(`#main .item-section__item[data-key='${key}']`);
  $item.remove();
};

/**
 * 초기화 버튼을 클릭하면 모든 항목을 제거합니다.
 */
export const handleRefreshList = () => {
  refreshList();
  updateListCount();

  const $list = document.querySelector('#main .item-section__list');
  $list.innerHTML = '';

  handleAddItem();
};
