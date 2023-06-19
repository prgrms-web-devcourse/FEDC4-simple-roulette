import html from "./item-section.html";
import { handleAddItem, handleRefreshList } from "./item/events.js";
import "./item-section.css";
import "./item/item.css";
import { addItem, setLocalInfo, lists } from "./item/states.js";
import { storage } from "../../storage";

function ItemSection({ Roullet, StartBtn }) {
  const $wrapper = document.querySelector("#main .item-section");
  $wrapper.innerHTML = html;

  const $refreshButton = $wrapper.querySelector(
    ".item-section__refresh-button"
  );
  $refreshButton.addEventListener("click", () => {
    handleRefreshList({ Roullet, StartBtn });
  });

  const $addButton = $wrapper.querySelector(".item-section__add-button");
  $addButton.addEventListener("click", () => {
    const newItem = addItem();
    if (!newItem) return;
    handleAddItem(newItem, lists.length, { Roullet, StartBtn });
  });

  const initialId = storage.getItem("item_id", 0);
  const newItem = addItem();
  if (!newItem) return;
  let initialList = storage.getItem("item_lists", newItem);
  let list = [];
  if (initialList === newItem) list.push(initialList);
  list.length ? (initialList = list) : initialList;

  setLocalInfo(initialList, initialId);
  initialList.map((e, i) => {
    handleAddItem(e, i + 1);
  });
}

export default ItemSection;
