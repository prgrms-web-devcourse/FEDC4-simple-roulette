import Header from "./header/Header.js";
import ItemSection from "./itemSection/ItemSection.js";
import RoulletSection from "./roulletSection/RoulletSection.js";
import RoulletHistorySection from "./roulletHistorySection/RoulletHistorySection.js";
import ItemListStore from "../stores/itemListStore.js";
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
    const { itemListStore, resultsStore } = this;

    new Header({ $target: document.querySelector("#header") });

    this.itemSection = new ItemSection({
      $target: document.querySelector(".item-section"),
      initialState: itemListStore.state,
      addItem: () => {
        itemListStore.addItem();
        this.render();
      },
      removeItem: (key) => {
        itemListStore.removeItem(key);
        if (itemListStore.state.length === 0) itemListStore.refreshList();
        this.render();
      },
      setCheck: (key, checked) => {
        itemListStore.setCheck(key, checked);
        this.roulletRender();
      },
      setValue: (key, value) => {
        itemListStore.setValue(key, value);
        this.roulletRender();
      },
      setRatio: (key, ratio) => {
        itemListStore.setRatio(key, ratio);
        this.roulletRender();
      },
      refreshList: () => {
        itemListStore.refreshList();
        this.render();
      },
    });

    this.roulletSection = new RoulletSection({
      $target: document.querySelector(".roullet-section"),
      initialState: itemListStore.state,
      addHistory: (results) => {
        console.log(results);
      },
    });

    this.roulletHistorySection = new RoulletHistorySection({
      $target: this.$target.querySelector(".roullet-history-section"),
      initialState: resultsStore.state.results,
      clearHistory: () => {
        resultsStore.deleteAllResults();
        this.render();
      },
    });
  }

  render() {
    const { itemSection, itemListStore, roulletSection } = this;
    itemSection.setState(itemListStore.state);
    roulletSection.setState(itemListStore.state);

    const resultState = this.resultsStore.state.results; //스토어에서 state가져오기
    this.roulletHistorySection.setState(resultState); //state 재설정
  }

  roulletRender() {
    const { itemListStore, roulletSection } = this;

    roulletSection.setState(itemListStore.state);
  }
}
