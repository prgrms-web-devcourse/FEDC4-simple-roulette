import { storage } from "../../storage";

export default function ResultHistoryModal() {
  const openButton = document.getElementById("open-history-modal");
  const modal = document.querySelector(".history-modal");
  const overlay = modal.querySelector(".history-modal_overlay");
  const closeBtn = modal.querySelector("button");
  const resultList = document.querySelector(".results-section");
  const clearBtn = modal.querySelector(".clear-btn");

  const renderResults = () => {
    resultList.innerHTML = "";
    const results = storage.getItem("results", []);

    if (results.length === 0) {
      //결과 내역이 없을 때
      const message = document.createElement("p");
      message.textContent = "결과 내역이 없습니다";
      resultList.appendChild(message);
    } else {
      //결과 리스트 렌더링
      results.forEach((item, index) => {
        const resultItem = document.createElement("div");
        resultItem.classList = "results-item";
        resultItem.innerHTML = `
            <div class="result_index"> ${index + 1} </div>
            <p> ${item} </p> 
        `;
        resultList.appendChild(resultItem);
      });
    }
  };

  const clearHistory = () => {
    //결과 전체 삭제
    const removeConfirm = confirm("결과 내역을 전체 삭제하시겠습니까?");
    if (removeConfirm) {
      storage.clearItem("results");
      renderResults();
    } else {
      alert("결과 내역이 삭제 되지 않았습니다!");
    }
  };

  const openModal = () => {
    //모달 열기
    modal.classList.remove("hidden");
    renderResults();
  };

  const closeModal = () => {
    //모달 닫기
    modal.classList.add("hidden");
  };

  overlay.addEventListener("click", closeModal);
  openButton.addEventListener("click", openModal);
  closeBtn.addEventListener("click", closeModal);
  clearBtn.addEventListener("click", clearHistory);
}
