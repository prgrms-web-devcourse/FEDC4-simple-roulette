import html from "./roullet-section.html";
import "./roullet-section.css";
import RoulletCanvas from "./RoulletCanvas";

function RoulletSection() {
  const $wrapper = document.querySelector(".roullet-section");
  $wrapper.insertAdjacentHTML("afterbegin", html);
  const lists = [
    {
      key: 1,
      value: "쉬운 난이도",
      checked: true,
      ratio: 12,
    },
    {
      key: 2,
      value: "중간 난이도",
      checked: false,
      ratio: 2,
    },
    {
      key: 3,
      value: "어려운 난이도",
      checked: false,
      ratio: 2,
    },
  ];
  //localstorage get으로 수정 예정

  const $canvas = document.querySelector("canvas");
  new RoulletCanvas({
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
