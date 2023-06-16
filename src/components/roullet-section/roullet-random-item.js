function RandomItemBtn({ $button, initialState, sumRatio, $canvas }) {
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render;
  };

  this.render = (() => {
    $button.addEventListener("click", (e) => {
      const totalRatio = sumRatio(this.state);
      const randomValue = Math.random() * totalRatio;

      let accumulatedRatio = 0;
      for (const { ratio, value } of this.state) {
        accumulatedRatio += ratio;
        if (randomValue <= accumulatedRatio) {
          console.log(value);
          return value;
        }
      }
    });
  })();
}

export default RandomItemBtn;
