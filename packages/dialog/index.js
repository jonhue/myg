import Myg from 'myg-base';
import {MDCDialog, MDCDialogFoundation, util} from '@material/dialog';

class Dialog extends Myg {

    constructor( element, options = {} ) {
        super;
        this._mdcDialog = new MDCDialog(element);
    }

    get mdcDialog() {
        return this._mdcDialog;
    }
    set mdcDialog(val) {
        this._mdcDialog = val;
    }

}

export default Dialog;
