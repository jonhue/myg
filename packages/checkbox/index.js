import Myg from '@myg/base';
import {MDCCheckbox, MDCCheckboxFoundation} from '@material/checkbox';

class Checkbox extends Myg {

    constructor(el) {
        this._checkbox = new MDCCheckbox(el);
    }

    get checkbox() {
        return this._checkbox;
    }
    set checkbox(val) {
        this._checkbox = val;
    }

    static init(el) {
        let arr = [];
        for ( let obj of el ) {
            arr.push(new Checkbox(obj));
        }
        return arr;
    }

}

export default Checkbox;
