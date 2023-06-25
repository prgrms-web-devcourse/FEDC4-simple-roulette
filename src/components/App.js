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
    new Header({ $target: document.querySelector('#header') });

    const itemSection = new ItemSection({
      $target: document.querySelector('.item-section'),
      initialState: this.itemListStore.state,
      addItem: () => {
        const newItem = this.itemListStore.addItem();
        itemSection.setState([...itemSection.state, newItem]);
      },
    });

    new RoulletSection({ $target: document.querySelector('.roullet-section') });
    new RoulletHistorySection({ $target: document.querySelector('.roullet-history-section') });
  }

  render() {}
}
