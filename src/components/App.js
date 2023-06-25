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

    const itemSection = new ItemSection({
      $target: document.querySelector('.item-section'),
      initialState: itemListStore.state,
      addItem: () => {
        itemListStore.addItem();
        itemSection.setState(itemListStore.state);
      },
      removeItem: key => {
        itemListStore.removeItem(key);
        itemSection.setState(itemListStore.state);
      },
      setCheck: (key, checked) => {
        itemListStore.setCheck(key, checked);
        itemSection.setState(itemListStore.state);
      },
      setValue: (key, value) => {
        itemListStore.setValue(key, value);
        itemSection.setState(itemListStore.state);
      }
    });

    new RoulletSection({ $target: document.querySelector('.roullet-section') });
    new RoulletHistorySection({ $target: document.querySelector('.roullet-history-section') });
  }

  render() {}
}
