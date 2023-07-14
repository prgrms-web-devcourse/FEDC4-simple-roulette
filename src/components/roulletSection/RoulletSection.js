export default class RoulletSection {
  constructor({ $target, initialState }) {
    this.$wrapper = document.querySelector(".roullet-section");
    $wrapper.insertAdjacentHTML("afterbegin", html);
    this.$button = document.querySelector(".start-button");
    this.$canvas = document.querySelector(".roullet-roll");

    this.$target = $target;

    this.state = initialState;
    this.initComponent();
  }

  initComponent() {
    const {lists} = this.state
    
    this.Roullet = new RoulletCanvas({
      $canvas,
      initialState: lists,
      sumRatio: (lists) =>
        lists.reduce(
          (acc, { ratio, checked }) => (!checked ? acc : acc + ratio),
          0
        ),
    });

    this.StartBtn = new RandomItemBtn({
      $button,
      initialState: lists,
      sumRatio: (lists) =>
        lists.reduce(
          (acc, { ratio, checked }) => (!checked ? acc : acc + ratio),
          0
        ),
      setResult: storage.setItem.bind(storage),
      getResult: storage.getItem.bind(storage),
      $canvas,
    });
  }

  setState(nextState) {
    this.state = nextState;

    //수정 필**
    this.StartBtn.setState(nextState);
    this.Roullet.setState(nextState);
  }
}
