import Header from './header/Header.js';
import ItemSection from './item-section/ItemSection.js';
import RoulletSection from './roullet-section/RoulletSection.js';
import ResultHistoryModal from './result-history-modal/ResultHistoryModal.js';

export default class App {
  constructor({ $target, initialState }) {
    this.state = initialState;
    
    new Header({ $target });

    const $main = document.createElement('main');
    $main.id = 'main';
    $target.appendChild($main);
    
    new ItemSection({ $target: $main });
    new RoulletSection({ $target: $main });
    new ResultHistoryModal({ $target });

    this.render();
  }

  setState(nextState) {
    this.state = nextState;
    this.render();
  }

  render() {}
}
