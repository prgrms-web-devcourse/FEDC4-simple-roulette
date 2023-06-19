import html from "./roullet-section.html";
import "./roullet-section.css";
import RoulletCanvas from "./roullet-canvas";
import RandomItemBtn from "./roullet-random-item";
import { storage } from "../../storage";

const lists = [
  {
    key: 1,
    value: "A",
    checked: false,
    ratio: 3,
  },
  {
    key: 2,
    value: "B",
    checked: false,
    ratio: 2,
  },
  {
    key: 3,
    value: "C",
    checked: false,
    ratio: 4,
  },
  {
    key: 4,
    value: "D",
    checked: false,
    ratio: 6,
  },
];

function RoulletSection() {
  const $wrapper = document.querySelector(".roullet-section");
  $wrapper.insertAdjacentHTML("afterbegin", html);
  const $button = document.querySelector(".start-button");
  const $canvas = document.querySelector(".roullet-roll");

  const lists = storage.getItem("list", []);

  console.log(lists);

  const Roullet = new RoulletCanvas({
    $canvas,
    initialState: lists,
    sumRatio: (lists) =>
      lists.reduce(
        (acc, { ratio, checked }) => (checked ? acc : acc + ratio),
        0
      ),
  });

  const StartBtn = new RandomItemBtn({
    $button,
    initialState: lists,
    sumRatio: (lists) =>
      lists.reduce(
        (acc, { ratio, checked }) => (checked ? acc : acc + ratio),
        0
      ),
    setResult: storage.setItem.bind(storage),
    getResult: storage.getItem.bind(storage),
    $canvas,
  });
}

export default RoulletSection;
