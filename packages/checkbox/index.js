import Myg from 'myg-base';
import {MDCCheckbox, MDCCheckboxFoundation} from '@material/checkbox';

class Checkbox extends Myg {

    constructor( element, options = {} ) {
        super;
        this._mdcCheckbox = new MDCCheckbox(element);
    }

    get mdcCheckbox() {
        return this._mdcCheckbox;
    }
    set mdcCheckbox(val) {
        this._mdcCheckbox = val;
    }

}

export default Checkbox;
