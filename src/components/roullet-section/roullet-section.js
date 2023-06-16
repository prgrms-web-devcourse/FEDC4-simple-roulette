import html from "./roullet-section.html";
import "./roullet-section.css";
import RoulletCanvas from "./roullet-canvas";
import RandomItemBtn from "./roullet-random-item";
import storage from "./roullet-storage";

const lists = [
  {
    key: 1,
    value: "쉬운 난이도",
    checked: false,
    ratio: 1,
  },
  {
    key: 2,
    value: "중간 난이도",
    checked: false,
    ratio: 1,
  },
  {
    key: 3,
    value: "쉬운 난이도",
    checked: false,
    ratio: 1,
  },
  {
    key: 4,
    value: "중간 난이도",
    checked: false,
    ratio: 1,
  },
];

function RoulletSection() {
  const $wrapper = document.querySelector(".roullet-section");
  $wrapper.insertAdjacentHTML("afterbegin", html);
  const $button = document.querySelector(".start-button");
  const $canvas = document.querySelector(".roullet-roll");

  // const lists = storage.getItem("list", []); **추후 주석 해제**

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
  });
}

export default RoulletSection;
