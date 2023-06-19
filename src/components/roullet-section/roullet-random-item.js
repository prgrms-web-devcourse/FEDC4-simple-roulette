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
    this.render;
  };

  this.rotate = (totalRatio, randomValue) => {
    $canvas.style.transform = `initial`;
    $canvas.style.transition = `initial`;
    console.log(randomValue); // **추후 콘솔 삭제**

    setTimeout(() => {
      const angle = 360 / totalRatio;
      const rotate = randomValue * angle + 3600 + angle / 2;

      $canvas.style.transform = `rotate(-${rotate}deg)`;
      $canvas.style.transition = `3s`;
    }, 0);
  };

  this.render = (() => {
    $button.addEventListener("click", (e) => {
      const totalRatio = sumRatio(this.state);
      const randomValue = Math.floor(Math.random() * totalRatio);
      this.rotate(totalRatio, randomValue);

      let accumulatedRatio = 0;
      for (const { ratio, value } of this.state) {
        accumulatedRatio += ratio;
        if (randomValue < accumulatedRatio) {
          console.log(value); // **추후 콘솔 삭제**
          setResult(
            "results",
            JSON.stringify([...getResult("results", []), value])
          );
          return value;
        }
      }
    });
  })();
}

export default RandomItemBtn;
