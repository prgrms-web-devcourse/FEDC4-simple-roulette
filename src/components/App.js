import Header from "./header/Header.js";
import ItemSection from "./itemSection/ItemSection.js";
import RoulletSection from "./roulletSection/RoulletSection.js";
import RoulletHistorySection from "./roulletHistorySection/RoulletHistorySection.js";
import ResultsStore from "../stores/resultStore.js";

export default class App {
  constructor({ $target }) {
    this.$target = $target;
    this.resultsStore = new ResultsStore(); //결과 내역을 관리하는 스토어

    this.initialComponents();
    this.render();
  }

  initialComponents() {
    new Header({ $target: this.$target.querySelector("#header") });
    new ItemSection({ $target: this.$target.querySelector(".item-section") });
    new RoulletSection({
      $target: this.$target.querySelector(".roullet-section"),
    });

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
    const resultState = this.resultsStore.state.results; //스토어에서 state가져오기
    this.roulletHistorySection.setState(resultState); //state 재설정
  }
}
