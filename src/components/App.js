import Header from './header/Header.js';
import ItemSection from './itemSection/ItemSection.js';
import RoulletSection from './roulletSection/RoulletSection.js';
import RoulletHistorySection from './roulletHistorySection/RoulletHistorySection.js';
import ItemListStore from '../stores/itemListStore.js';
import ResultsStore from "../stores/resultStore.js";

export default class App {
  constructor({ $target }) {
    this.$target = $target;
    this.itemListStore = new ItemListStore();
    this.resultsStore = new ResultsStore(); //결과 내역을 관리하는 스토어

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
      },
      setValue: (key, value) => {
        itemListStore.setValue(key, value);
      },
      setRatio: (key, ratio) => {
        itemListStore.setRatio(key, ratio);
      },
      refreshList: () => {
        itemListStore.refreshList();
        this.render();
      },
    });

    new RoulletSection({ $target: document.querySelector('.roullet-section') });
    
    this.roulletHistorySection = new RoulletHistorySection({
      $target: this.$target.querySelector(".roullet-history-section"),
      initialState: this.resultsStore.state.results,
      clearHistory: () => {
        this.resultsStore.deleteAllResults();
        this.render();
      },
    });
  }

  render() {
    const { itemSection, itemListStore } = this;
    itemSection.setState(itemListStore.state);
    
    const resultState = this.resultsStore.state.results; //스토어에서 state가져오기
    this.roulletHistorySection.setState(resultState); //state 재설정

  }
}
