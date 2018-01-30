import Myg from '@myg/base';
import {MDCRadio, MDCRadioFoundation} from '@material/radio';

class Radio extends Myg {

    constructor(el) {
        this._radio = new MDCRadio(el);
    }

    get radio() {
        return this._radio;
    }
    set radio(val) {
        this._radio = val;
    }

    static init(el) {
        let arr = [];
        for ( let obj of el ) {
            arr.push(new Radio(obj));
        }
        return arr;
    }

}

export default Radio;
