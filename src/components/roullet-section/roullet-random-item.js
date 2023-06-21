function RandomItemBtn({
  $button,
  initialState,
  sumRatio,
  getResult,
  setResult,
  $canvas,
}) {
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
  };

  this.rotate = (totalRatio, randomValue) => {
    $canvas.style.transform = `initial`;
    $canvas.style.transition = `initial`;

    setTimeout(() => {
      const angle = 360 / totalRatio;
      const rotate = randomValue * angle + 3600 + angle / 2;

      $canvas.style.transform = `rotate(-${rotate}deg)`;
      $canvas.style.transition = `3s`;
    }, 0);
  };

  this.randomValue = () => {
    const isValue =
      this.state.length > 0 && this.state.every(({ value }) => value);

    if (isValue) {
      const totalRatio = sumRatio(this.state);
      const randomValue = Math.floor(Math.random() * totalRatio);
      this.rotate(totalRatio, randomValue);

      let accumulatedRatio = 0;
      for (const { ratio, value, checked } of this.state) {
        if (!checked) continue;
        accumulatedRatio += ratio;
        if (randomValue < accumulatedRatio) {
          setResult(
            "results",
            JSON.stringify([...getResult("results", []), value])
          );
          return value;
        }
      }
    } else {
      alert("모든 항목에 값이 있어야 합니다!");
    }
  };

  $button.addEventListener("click", this.randomValue);
}

export default RandomItemBtn;
