import html from "./roullet-section.html";
import "./roullet-section.css";
import RoulletCanvas from "./roullet-canvas";

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
    value: "어려운 난이도",
    checked: false,
    ratio: 1,
  },
  {
    key: 4,
    value: "어려운 난이도",
    checked: false,
    ratio: 1,
  },
];
//localstorage get으로 수정 예정
// const lists = storage.getItem("list",[])

function RoulletSection() {
  const $wrapper = document.querySelector(".roullet-section");
  $wrapper.insertAdjacentHTML("afterbegin", html);

  const $canvas = document.querySelector("canvas");

  console.log($canvas);

  const Roullet = new RoulletCanvas({
    $canvas,
    initialState: lists,
    sumRatios: (lists) => {
      return lists.reduce((acc, { ratio, checked }) => {
        if (!checked) return (acc += ratio);
        else return acc;
      }, 0);
    },
  });
}

export default RoulletSection;
