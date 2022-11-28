import {makeAutoObservable} from "mobx";
import {ICountry} from "../types/interfaces";

class stateControlAutocomplete {
    request = ''
    countries: ICountry[] = []

    constructor() {
        makeAutoObservable(this)
    }

    changeRequest(payload: string) {
        this.request = payload
    }

    changeCountries(payload: ICountry[]) {
        this.countries = payload
    }
}

export default new stateControlAutocomplete()