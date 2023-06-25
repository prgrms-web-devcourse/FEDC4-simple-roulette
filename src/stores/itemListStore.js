import ItemListStorage from '../utils/itemListStorage.js';
import ItemIdStorage from '../utils/itemIdStorage.js';

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
}

export default ItemListStore;
