import Myg from 'myg-base';
import {MDCRadio, MDCRadioFoundation} from '@material/radio';

class Radio extends Myg {

    constructor( element, options = {} ) {
        super;
        this._mdcRadio = new MDCRadio(element);
    }

    get mdcRadio() {
        return this._mdcRadio;
    }
    set mdcRadio(val) {
        this._mdcRadio = val;
    }

}

export default Radio;
