import html from "./Roullet-section.html";
import "./Roullet-section.css";
import RoulletCanvas from "./RoulletCanvas.js";
import RandomItemBtn from "./RoulletRandomItemBtn.js";
export default class RoulletSection {
  constructor({ $target, initialState, addHistory }) {
    $target.insertAdjacentHTML("afterbegin", html);
    this.$button = document.querySelector(".start-button");
    this.$canvas = document.querySelector(".roullet-roll");

    this.addHistory = addHistory;

    this.state = initialState;
    this.initComponent();
  }

  initComponent() {
    const { $canvas, $button, addHistory, state } = this;

    this.Roullet = new RoulletCanvas({
      $target: $canvas,
      initialState: state,
    });

    this.StartBtn = new RandomItemBtn({
      $target: $button,
      initialState: state,
      addHistory,
      $canvas,
    });
  }

  setState(nextState) {
    this.state = nextState;

    this.StartBtn.setState(nextState);
    this.Roullet.setState(nextState);
  }
}
