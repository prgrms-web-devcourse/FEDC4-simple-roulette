import Header from './header/Header.js';
import ItemSection from './itemSection/ItemSection.js';
import RoulletSection from './roulletSection/RoulletSection.js';
import RoulletHistorySection from './roulletHistorySection/RoulletHistorySection.js';
import ItemListStore from '../stores/itemListStore.js';

export default class App {
  constructor({ $target }) {
    this.$target = $target;
    this.itemListStore = new ItemListStore();

    this.initialComponents();
    this.render();
  }

  initialComponents() {
    const { itemListStore } = this;

    new Header({ $target: document.querySelector('#header') });

    this.itemSection = new ItemSection({
      $target: document.querySelector('.item-section'),
      initialState: itemListStore.state,
      addItem: () => {
        itemListStore.addItem();
        this.render();
      },
      removeItem: key => {
        itemListStore.removeItem(key);
        if (itemListStore.state.length === 0) itemListStore.refreshList();
        this.render();
      },
      setCheck: (key, checked) => {
        itemListStore.setCheck(key, checked);
        this.render();
      },
      setValue: (key, value) => {
        itemListStore.setValue(key, value);
        this.render();
      },
      setRatio: (key, ratio) => {
        itemListStore.setRatio(key, ratio);
        this.render();
      },
      refreshList: () => {
        itemListStore.refreshList();
        this.render();
      },
    });

    new RoulletSection({ $target: document.querySelector('.roullet-section') });
    new RoulletHistorySection({ $target: document.querySelector('.roullet-history-section') });
  }

  render() {
    const { itemSection, itemListStore } = this;

    itemSection.setState(itemListStore.state);
  }
}
