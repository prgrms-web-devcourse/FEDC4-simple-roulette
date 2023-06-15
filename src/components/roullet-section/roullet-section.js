import html from "./roullet-section.html";
import "./roullet-section.css";

function sumRatios(items = []) {
  return items.reduce((acc, { ratio, checked }) => {
    if (!checked) return (acc += ratio);
    else return acc;
  }, 0);
}

function RoulletDraw(items) {
  const $canvas = document.querySelector("canvas");
  const ctx = $canvas.getContext("2d");
  const centerX = $canvas.width / 2;
  const centerY = $canvas.height / 2;
  const radius = centerX - 10;

  // 룰렛 영역 그리기
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI); // 원의중심 x좌표, 원의 중심 y좌표, 원의 반지름, 원호의 시작 각도, 원호의 종료 각도
  // 0부터 2π까지 원을 그리게 된다.
  ctx.strokeStyle = "#DBDBDB"; //룰렛선 색상
  ctx.stroke();

  // 룰렛 분할선 그리기
  const sum = sumRatios(items);
  let startAngle = 0;
  for (const { key, value, checked, ratio } of items) {
    if (checked) continue;
    const percent = (ratio / sum) * 100;
    const angle = (360 * percent) / 100;
    const radian = (angle * Math.PI) / 180;
    const endAngle = radian + startAngle;

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fillStyle = key % 2 === 0 ? "white" : "gray";
    ctx.fill();
    ctx.stroke();

    startAngle = endAngle;
  }
}

function RoulletSection() {
  const $wrapper = document.querySelector(".roullet-section");
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
  window.onload = () => {
    RoulletDraw(lists);
  };
  $wrapper.insertAdjacentHTML("afterbegin", html);
}

export default RoulletSection;
