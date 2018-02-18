import Myg from 'myg-base';
import {MDCFormField, MDCFormFieldFoundation} from '@material/form-field';

class Field extends Myg {

    constructor( element, options = {} ) {
        super( element, options );
        this._mdcFormField = new MDCFormField(element);
    }

    get mdcFormField() {
        return this._mdcFormField;
    }
    set mdcFormField(val) {
        this._mdcFormField = val;
    }

}

export default Field;
