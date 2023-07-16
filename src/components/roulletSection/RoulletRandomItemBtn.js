export default class RandomItemBtn {
  constructor({ $target, initialState, addHistory, $canvas, getWinner}) {
    this.$target = $target;
    this.$canvas = $canvas;
    this.state = initialState;
    this.addHistory = addHistory;
    this.getWinner = getWinner

    this.initEvent();
  }

  setState(nextState) {
    this.state = nextState;
  }

  rotate(totalRatio, randomValue) {
    this.$canvas.style.transform = `initial`;
    this.$canvas.style.transition = `initial`;

    setTimeout(() => {
      const angle = 360 / totalRatio;
      const rotate = randomValue * angle + 3600 + angle / 2;

      this.$canvas.style.transform = `rotate(-${rotate}deg)`;
      this.$canvas.style.transition = `3s`;
    }, 0);
  }

  randomValue() {
    const { state, rotate, addHistory , getWinner} = this;

    const isValue = state.length > 0 && state.every(({ value }) => value);

    if (isValue) {
      const totalRatio = state.reduce(
        (acc, { ratio, checked }) => (!checked ? acc : acc + ratio),
        0
      );
      const randomValue = Math.floor(Math.random() * totalRatio);
      rotate.call(this, totalRatio, randomValue);

      let accumulatedRatio = 0;
      for (const { ratio, value, checked } of state) {
        if (!checked) continue;
        accumulatedRatio += ratio;
        if (randomValue < accumulatedRatio) {
          setTimeout(() => {
            addHistory(value);
            getWinner(value)
          }, 3100);
          break;
        }
      }
    } else {
      alert("모든 항목에 값이 있어야 합니다!");
    }
  }

  initEvent() {
    let isClicked = false;
    this.$target.addEventListener("click", () => {
      if (!isClicked) {
        isClicked = true;
        this.randomValue();
        setTimeout(() => {
          isClicked = false;
        }, 3200);
      }
    });
  }
}
