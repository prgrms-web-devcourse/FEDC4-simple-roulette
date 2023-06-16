function RoulletCanvas({ $canvas, initialState, sumRatios }) {
  this.state = initialState;

  this.circleState = {
    ctx: $canvas.getContext("2d"),
    centerX: $canvas.width / 2,
    centerY: $canvas.height / 2,
    radius: $canvas.width / 2 - 10,
  };

  this.render = ({ ctx, centerX, centerY, radius }) => {
    // 룰렛 원 영역
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI); // 원의중심 x좌표, 원의 중심 y좌표, 원의 반지름, 원호의 시작 각도, 원호의 종료 각도
    ctx.strokeStyle = "#DBDBDB"; //룰렛선 색상

    // 룰렛 부채꼴 영역
    const sum = sumRatios(this.state);
    let startAngle = 0;
    for (const { key, value, checked, ratio } of this.state) {
      if (checked) continue;
      const percent = (ratio / sum) * 100;
      const angle = (360 * percent) / 100;
      const radian = (angle * Math.PI) / 180;
      const endAngle = radian + startAngle;

      ctx.beginPath();
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = key % 2 === 0 ? "white" : "gray"; // 색깔 입히는곳
      ctx.fill();

      startAngle = endAngle;
    }
  };

  this.render(this.circleState);
}

export default RoulletCanvas;
