import Myg from '@myg/base';
import {MDCRadio, MDCRadioFoundation} from '@material/radio';

class Radio extends Myg {

    constructor(element) {
        this._element = new MDCRadio(element);
    }

    static init(elements) {
        let arr = [];
        for ( let obj of elements ) {
            arr.push(new Radio(obj));
        }
        return arr;
    }

}

export default Radio;
