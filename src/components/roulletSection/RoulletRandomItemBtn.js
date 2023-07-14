export default class RandomItemBtn{
    constructor({
        $button,
        initialState,
        sumRatio,
        getResult,
        setResult,
        $canvas,
    }){
        this.$button = $button
        this.state = initialState
        this.sumRatio = sumRatio
        this.getResult = getResult
        this.setResult = setResult
        this.$canvas = $canvas
        this.render()
    }

    setState(nextState){
        this.state = nextState
    }

    rotate(totalRatio,randomValue){
        $canvas.style.transform = `initial`;
        $canvas.style.transition = `initial`;

        setTimeout(() => {
        const angle = 360 / totalRatio;
        const rotate = randomValue * angle + 3600 + angle / 2;

        $canvas.style.transform = `rotate(-${rotate}deg)`;
        $canvas.style.transition = `3s`;
        }, 0);
    }

    randomValue (){
        const isValue =
        this.state.length > 0 && this.state.every(({ value }) => value);

        if (isValue) {
        const totalRatio = this.sumRatio(this.state);
        const randomValue = Math.floor(Math.random() * totalRatio);
        this.rotate(totalRatio, randomValue);

        let accumulatedRatio = 0;
        for (const { ratio, value, checked } of this.state) {
            if (!checked) continue;
            accumulatedRatio += ratio;
            if (randomValue < accumulatedRatio) {
            setTimeout(() => {
                this.setResult(
                "results",
                JSON.stringify([...this.getResult("results", []), value])
                );
            }, 3100);
            break;
            }
        }
        } else {
        alert("모든 항목에 값이 있어야 합니다!");
        }
        }

        render(){
            (() => {
                let isClicked = false;
                $button.addEventListener("click", () => {
                if (!isClicked) {
                    isClicked = true;
                    this.randomValue();
                    setTimeout(() => {
                    isClicked = false;
                    }, 3200);
                }
                });
            })();
        }

}