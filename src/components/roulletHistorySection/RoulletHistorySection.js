import html from "./RoulletHistorySection.html";
import "./RoulletHistorySection.css";

export default class RoulletHistorySection {
  constructor({ $target, initialState, clearHistory }) {
    $target.innerHTML = html;
    this.state = initialState;
    this.clearHistory = clearHistory;

    this.openButton = $target.querySelector("#open-modal-btn");
    this.modal = $target.querySelector(".history-modal");
    this.overlay = this.modal.querySelector(".history-modal_overlay");
    this.closeBtn = this.modal.querySelector("button");
    this.resultList = document.querySelector(".results-section");
    this.clearBtn = this.modal.querySelector(".clear-btn");

    $target.addEventListener("click", this.handleEvent.bind(this));
  }

  setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  handleEvent(event) {
    const { target } = event;

    if (target.id === "open-modal-btn") {
      this.openModal();
    } else if (target.classList.contains("history-modal_overlay")) {
      this.closeModal();
    } else if (target.classList.contains("clear-btn")) {
      this.clearHistory();
    }
  }

  openModal() {
    // 모달 열기
    this.modal.classList.remove("hidden");
    this.render();
  }

  closeModal() {
    // 모달 닫기
    this.modal.classList.add("hidden");
  }

  render() {
    this.resultList.innerHTML = "";
    const results = this.state;
    if (results.length === 0) {
      // 결과 내역이 없을 때
      const message = document.createElement("p");
      message.textContent = "결과 내역이 없습니다";
      this.resultList.appendChild(message);
    } else {
      // 결과 리스트 렌더링
      results.forEach((item, index) => {
        const resultItem = document.createElement("div");
        resultItem.classList = "results-item";
        resultItem.innerHTML = `
          <div class="result_index"> ${index + 1} </div>
          <p> ${item} </p> 
        `;
        this.resultList.appendChild(resultItem);
      });
    }
  }
}
