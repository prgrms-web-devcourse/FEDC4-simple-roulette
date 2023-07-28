import { CLOLOR, LENGTH_SIZE, ANGLE_SIZE } from "../../constants/style.js";

export default class RoulletCanvas {
  constructor({ $target, initialState }) {
    this.state = initialState;

    this.circleState = {
      ctx: $target.getContext("2d"),
      centerX: $target.width / 2,
      centerY: $target.height / 2,
      radius: $target.width / 2 - 10,
    };

    this.render();
  }

  setState(nextState) {
    this.state = nextState;
    this.render();
  }

  render() {
    const { ctx, centerX, centerY, radius } = this.circleState;
    // 룰렛 원 영역
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI); // 원의중심 x좌표, 원의 중심 y좌표, 원의 반지름, 원호의 시작 각도, 원호의 종료 각도
    ctx.strokeStyle = "#DBDBDB";

    // 룰렛 부채꼴 영역
    const totalRatio = this.state.reduce(
      (acc, { ratio, checked }) => (!checked ? acc : acc + ratio),
      0
    );
    let startAngle = -(1 / 2) * Math.PI;

    let colorindex = -1;
    for (const { value, checked, ratio } of this.state) {
      //forEach로 진행 안한 이유 : checked 진행 된 배열 index를 세는 변수를 따로 만들어 줘야함
      //따라서 of문으로 진행하는게 더 깔끔하다고 생각
      //확인 후 삭제 부탁드립니다.

      if (!checked) continue;
      colorindex++;
      const percent = (ratio / totalRatio) * 100;
      const angle = (360 * percent) / 100;
      const radian = (angle * Math.PI) / 180;
      const endAngle = radian + startAngle;

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = CLOLOR[colorindex];
      ctx.fill();
      ctx.stroke();

      //텍스트 쓰기
      const textAngle = startAngle + radian / 2;

      const textX = centerX + (radius / 2) * Math.cos(textAngle);
      const textY = centerY + (radius / 2) * Math.sin(textAngle);

      ctx.save(); // 현재 캔버스 상태 저장
      ctx.translate(textX, textY); // 캔버스의 원점을 텍스트 위치로 이동
      ctx.rotate(textAngle); // 텍스트를 대각선으로 회전

      let fontSize = LENGTH_SIZE - value.length; //글자 수에 따라서 폰트 크기 조절
      if (fontSize > angle) {
        fontSize = angle < ANGLE_SIZE ? angle : fontSize; //비율에 따라서 폰트 크기 조절
      }

      ctx.font = `bold ${fontSize}px Raleway`;
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.fillText(value, 0, 0); // 회전한 캔버스에 텍스트를 그림
      ctx.restore();

      startAngle = endAngle;
    }
  }
}
