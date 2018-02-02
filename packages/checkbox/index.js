import Myg from '@myg/base';
import {MDCCheckbox, MDCCheckboxFoundation} from '@material/checkbox';

class Checkbox extends Myg {

    constructor(element) {
        super
        this._element = new MDCCheckbox(element);
    }

    static init(elements) {
        let arr = [];
        for ( let obj of elements ) {
            arr.push(new Checkbox(obj));
        }
        return arr;
    }

}

export default Checkbox;
