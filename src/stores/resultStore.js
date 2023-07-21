import { storage } from "../utils/storage.js";
import { RESULTS } from "../constants/storageKeys.js";

class ResultsStore {
  constructor() {
    const results = storage.getItem(RESULTS, []);
    this.state = this.makeResultsStoreState(results);
  }

  makeResultsStoreState(results) {
    return {
      results,
    };
  }

  setState(results) {
    storage.setItem(RESULTS, JSON.stringify(results));
    this.state = this.makeResultsStoreState(results);
  }

  deleteAllResults() {
    const removeConfirm = confirm("결과 내역을 전체 삭제하시겠습니까?");
    if (removeConfirm) {
      this.setState([]);
      storage.clearItem(RESULTS);
    } else {
      alert("결과 내역이 삭제되지 않았습니다!");
    }
  }

  //결과 내역 추가 함수 구현 필요
}

export default ResultsStore;
