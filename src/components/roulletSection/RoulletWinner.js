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
        this.$target.textContent = `${this.state} 결과 당첨!`
    }
}