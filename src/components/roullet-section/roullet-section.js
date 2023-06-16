import html from "./roullet-section.html";
import "./roullet-section.css";
import RoulletCanvas from "./roullet-canvas";
import RandomItemBtn from "./roullet-random-item";

const lists = [
  {
    key: 1,
    value: "쉬운 난이도",
    checked: false,
    ratio: 90,
  },
  {
    key: 2,
    value: "중간 난이도",
    checked: false,
    ratio: 1,
  },
];
//localstorage get으로 수정 예정
// const lists = storage.getItem("list",[])

function RoulletSection() {
  const $wrapper = document.querySelector(".roullet-section");
  $wrapper.insertAdjacentHTML("afterbegin", html);

  const $canvas = document.querySelector(".roullet-roll");

  const Roullet = new RoulletCanvas({
    $canvas,
    initialState: lists,
    sumRatio: (lists) => {
      return lists.reduce((acc, { ratio, checked }) => {
        if (!checked) return (acc += ratio);
        else return acc;
      }, 0);
    },
  });

  const $button = document.querySelector(".start-button");

  const StartBtn = new RandomItemBtn({
    $button,
    initialState: lists,
    sumRatio: (lists) => {
      return lists.reduce((acc, { ratio, checked }) => {
        if (!checked) return (acc += ratio);
        else return acc;
      }, 0);
    },
    $canvas,
  });
}

export default RoulletSection;
