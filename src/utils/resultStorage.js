import { storage } from "../utils/storage.js";
import { RESULTS } from "../constants/storageKeys.js";

class ResultStorage {
  getResults = () => storage.getItem(RESULTS, []); //결과 목록들 가져오기

  clearResults = () => storage.clearItem(RESULTS); //결과 내역 전체 삭제하기
}

export default ResultStorage;
