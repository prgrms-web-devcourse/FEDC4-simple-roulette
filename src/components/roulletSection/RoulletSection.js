import html from "./Roullet-section.html";
import "./Roullet-section.css";
import RoulletCanvas from "./RoulletCanvas.js";
import RandomItemBtn from "./RoulletRandomItemBtn.js";
import RoulletWinner from "./RoulletWinner.js";

export default class RoulletSection {
  constructor({ $target, initialState, addHistory }) {
    $target.insertAdjacentHTML("afterbegin", html);
    this.$button = document.querySelector(".start-button");
    this.$canvas = document.querySelector(".roullet-roll");
    this.$winner = document.querySelector(".roullet-section__winner")

    this.addHistory = addHistory;

    this.state = initialState;
    this.initComponent();
  }

  initComponent() {
    const { $canvas, $button, addHistory, state, $winner } = this;

    this.Roullet = new RoulletCanvas({
      $target: $canvas,
      initialState: state,
    });

    this.StartBtn = new RandomItemBtn({
      $target: $button,
      initialState: state,
      addHistory,
      $canvas,
      getWinner : (value) =>{
        this.winner.setState(value)
      }
    });

    this.winner = new RoulletWinner({
      $target : $winner,
    })
  }

  setState(nextState) {
    this.state = nextState;

    this.StartBtn.setState(nextState);
    this.Roullet.setState(nextState);
  }
}
