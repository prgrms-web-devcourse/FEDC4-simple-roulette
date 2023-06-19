import {
  createCheckbox,
  createRatio,
  createItemName,
  createCloseIcon,
  createListItem,
  createRemoveButton,
  updateListCount,
} from "./elements.js";
import { removeItem, refreshList, addItem } from "./states.js";
import { storage } from "../../../storage.js";

/**
 * 항목 아이템을 생성하여 문서에 추가합니다.
 */
export const handleAddItem = ({ key, value, checked, ratio }, index) => {
  const $list = document.querySelector("#main .item-section__list");

  const $listItem = createListItem(key);
  const $checkbox = createCheckbox(key, checked);
  const $itemName = createItemName(key, value, index);
  const $ratio = createRatio(key, ratio);
  const $removeButton = createRemoveButton(createCloseIcon());

  $listItem.append($checkbox, $itemName, $ratio, $removeButton);
  $list.appendChild($listItem);

  updateListCount();
};

/**
 * 항목에서 X 아이콘을 클릭하면 해당 항목을 제거합니다.
 */
export const handleRemoveItem = (e) => {
  const key = Number(e.currentTarget.closest("li")?.getAttribute("data-key"));
  if (isNaN(key)) return;
  removeItem(key);
  updateListCount();

  const $item = document.querySelector(
    `#main .item-section__item[data-key='${key}']`
  );
  $item.remove();
};

/**
 * 초기화 버튼을 클릭하면 모든 항목을 제거합니다.
 */
export const handleRefreshList = () => {
  refreshList();
  updateListCount();

  const $list = document.querySelector("#main .item-section__list");
  $list.innerHTML = "";

  const newItem = addItem();
  if (!newItem) return;
  storage.setItem("item_lists", JSON.stringify([newItem]));
  handleAddItem(newItem, 1);
};
