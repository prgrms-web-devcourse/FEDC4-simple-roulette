import ItemListStorage from '../utils/itemListStorage.js';
import ItemIdStorage from '../utils/itemIdStorage.js';

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
    this.itemListStorage = new ItemListStorage();
    this.itemIdStorage = new ItemIdStorage();
    this.state = this.itemListStorage.getLists();
  }

  setState(nextState) {
    this.state = nextState;
    this.itemListStorage.setLists(nextState);
  }

  refreshList() {
    const confirmation = confirm('정말로 모든 항목을 초기화 하시겠습니까?');
    if (!confirmation) return;
    
    this.state = defaultItemList;
    this.itemListStorage.setLists(defaultItemList);
    this.itemIdStorage.setItemId(defaultItemId);
  }

  addItem() {
    const { itemIdStorage, state } = this;

    if (state.length >= 10) {
      alert('항목은 최대 10개 까지 추가할 수 있어요!');
      return;
    }

    const nextId = itemIdStorage.getItemId();

    const newItem = {
      key: nextId,
      value: '',
      checked: true,
      ratio: 1,
    };

    itemIdStorage.setItemId(nextId + 1);

    const nextState = [...state, newItem];
    this.setState(nextState);
  }

  removeItem(key) {
    const nextState = this.state.filter(item => item.key !== key);
    this.setState(nextState);
  }

  setCheck(key, checked) {
    const nextState = this.state.map(item => (item.key === key ? { ...item, checked } : item));
    this.setState(nextState);
  }

  setValue(key, value) {
    const nextState = this.state.map(item => (item.key === key ? { ...item, value } : item));
    this.setState(nextState);
  }

  setRatio(key, ratio) {
    const nextState = this.state.map(item => (item.key === key ? { ...item, ratio } : item));
    this.setState(nextState);
  }
}

export default ItemListStore;
