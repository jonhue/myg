import Myg from '~myg-base';
import {MDCSelectFoundation} from '~@material/select';

class Selector extends Myg {

    constructor( element, options = {} ) {
        super;
        this._mdcSelect = new MDCSelect(element);
    }

    get mdcSelect() {
        return this._mdcSelect;
    }
    set mdcSelect(val) {
        this._mdcSelect = val;
    }

}

export default Selector;
