import {makeAutoObservable} from "mobx";

class stateControllButtons {
    firstText = ''
    secondText = ''

    constructor() {
        makeAutoObservable(this)
    }

    changeFirstText(payload: string) {
        this.firstText = payload
    }

    changeSecondText(payload: string) {
        this.secondText = payload
    }
}

export default new stateControllButtons()