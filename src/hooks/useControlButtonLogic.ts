import {HELLO_WORLD} from "../constants/constants";
import text from "../mobx/stateControllButtons";

export const useControlButtonLogic = () => {

    function clear() {
        text.changeFirstText('')
    }

    function setTextHelloWorld() {
        text.changeFirstText(HELLO_WORLD)
    }

    function showAlert() {
        alert(text.secondText)
    }

    /* eslint-disable */

    function showAlertNumber() {
        // @ts-ignore
        if (text.secondText !== '' && !isNaN(text.secondText)) {
            alert(text.secondText)
        }
    }

    /* eslint-enable */
    return {
        clear,
        setTextHelloWorld,
        showAlert,
        showAlertNumber
    }
}