function RoulletCanvas({ $canvas, initialState, sumRatio }) {
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render(this.circleState);
  };

  this.circleState = {
    ctx: $canvas.getContext("2d"),
    centerX: $canvas.width / 2,
    centerY: $canvas.height / 2,
    radius: $canvas.width / 2 - 10,
  };

  this.render = ({ ctx, centerX, centerY, radius }) => {
    // 룰렛 원 영역
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI); // 원의중심 x좌표, 원의 중심 y좌표, 원의 반지름, 원호의 시작 각도, 원호의 종료 각도
    ctx.strokeStyle = "#DBDBDB";

    // 룰렛 부채꼴 영역
    const sum = sumRatio(this.state);
    let startAngle = 0;
    for (const { key, value, checked, ratio } of this.state) {
      if (checked) continue;
      const percent = (ratio / sum) * 100;
      const angle = (360 * percent) / 100;
      const radian = (angle * Math.PI) / 180;
      const endAngle = radian + startAngle;

      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, startAngle, endAngle);
      ctx.closePath();
      ctx.fillStyle = key % 2 === 0 ? "white" : "gray"; // 색깔 입히는곳
      ctx.fill();
      ctx.stroke();

      //텍스트 쓰기
      const textAngle = startAngle + radian / 2;

      const textX = centerX + (radius / 2) * Math.cos(textAngle);
      const textY = centerY + (radius / 2) * Math.sin(textAngle);

      ctx.save(); // 현재 캔버스 상태 저장
      ctx.translate(textX, textY); // 캔버스의 원점을 텍스트 위치로 이동
      ctx.rotate(textAngle); // 텍스트를 대각선으로 회전

      console.log(angle);
      const fontSize = angle < 18 ? angle : 18;
      ctx.font = `bold ${fontSize}px Raleway`;
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.fillText(value, 0, 0); // 회전한 캔버스에 텍스트를 그림
      ctx.restore();

      startAngle = endAngle;
    }
  };

  this.render(this.circleState);
}

export default RoulletCanvas;
