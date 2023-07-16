import {LENGTH_SIZE} from "../../constants/style.js"

export default class RoulletWinner{
    constructor({$target}){
        this.$target = $target
        this.state =""
        this.render()
    }

    setState(nextState){
        this.state = nextState
        this.render()
    }

    render(){
        const resultFontSize = LENGTH_SIZE - this.state.length

        this.$target.textContent = `${this.state} 결과 당첨!`
        this.$target.style.fontSize = resultFontSize + "px"
    }
}