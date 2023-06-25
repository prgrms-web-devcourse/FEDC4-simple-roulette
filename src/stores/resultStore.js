import ResultStorage from "../utils/resultStorage.js";

class ResultsStore {
  constructor() {
    this.resultStorage = new ResultStorage();
    const results = this.resultStorage.getResults();
    this.state = this.makeResultsStoreState(results);
  }

  makeResultsStoreState(results) {
    return {
      results,
    };
  }

  setState(results) {
    this.state = this.makeResultsStoreState(results);
  }

  deleteAllResults() {
    const removeConfirm = confirm("결과 내역을 전체 삭제하시겠습니까?");
    if (removeConfirm) {
      this.setState([]);
      this.resultStorage.clearResults();
    } else {
      alert("결과 내역이 삭제되지 않았습니다!");
    }
  }

  //결과 내역 추가 함수 구현 필요
}

export default ResultsStore;
