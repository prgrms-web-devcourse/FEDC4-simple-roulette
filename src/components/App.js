import Header from './header/Header.js';
import ItemSection from './itemSection/ItemSection.js';
import RoulletSection from './roulletSection/RoulletSection.js';
import RoulletHistorySection from './roulletHistorySection/RoulletHistorySection.js';

export default class App {
  constructor({ $target, initialState }) {
    this.state = initialState;

    new Header({ $target: document.querySelector('#header') });
    new ItemSection({ $target: document.querySelector('.item-section') });
    new RoulletSection({ $target: document.querySelector('.roullet-section') });
    new RoulletHistorySection({ $target: document.querySelector('.roullet-history-section') });

    this.render();
  }

  setState(nextState) {
    this.state = nextState;
    this.render();
  }

  render() {}
}
