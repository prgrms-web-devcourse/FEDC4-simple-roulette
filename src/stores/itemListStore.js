import { storage } from '../utils/storage.js';
import { ITEM_LISTS, ITEM_ID } from '../constants/storageKeys.js';

export const defaultItemList = [
  {
    key: 0,
    value: '',
    checked: true,
    ratio: 1,
  },
];

export const defaultItemId = 1;

class ItemListStore {
  constructor() {
    this.state = storage.getItem(ITEM_LISTS, defaultItemList);
  }

  setState(nextState) {
    this.state = nextState;
    storage.setItem(ITEM_LISTS, JSON.stringify(nextState));
  }

  refreshList() {
    const confirmation = confirm('정말로 모든 항목을 초기화 하시겠습니까?');
    if (!confirmation) return;

    this.state = defaultItemList;
    storage.setItem(ITEM_LISTS, JSON.stringify(defaultItemList));
    storage.setItem(ITEM_ID, JSON.stringify(defaultItemId));
  }

  addItem() {
    const { state } = this;

    if (state.length >= 10) {
      alert('항목은 최대 10개 까지 추가할 수 있어요!');
      return;
    }

    const nextId = storage.getItem(ITEM_ID, defaultItemId);

    const newItem = {
      key: nextId,
      value: '',
      checked: true,
      ratio: 1,
    };

    storage.setItem(ITEM_ID, JSON.stringify(nextId + 1));

    const nextState = [...state, newItem];
    this.setState(nextState);
  }

  removeItem(key) {
    const nextState = this.state.filter((item) => item.key !== key);
    this.setState(nextState);
  }

  setCheck(key, checked) {
    const nextState = this.state.map((item) => (item.key === key ? { ...item, checked } : item));
    this.setState(nextState);
  }

  setValue(key, value) {
    const nextState = this.state.map((item) => (item.key === key ? { ...item, value } : item));
    this.setState(nextState);
  }

  setRatio(key, ratio) {
    const nextState = this.state.map((item) => (item.key === key ? { ...item, ratio } : item));
    this.setState(nextState);
  }
}

export default ItemListStore;
