import Myg from '@myg/base';
import {MDCSnackbar, MDCSnackbarFoundation} from '@material/snackbar';

class Toast extends Myg {

    constructor( element, options = {} ) {
        this._mdcSnackbar = new MDCSnackbar(element);
    }

    get mdcSnackbar() {
        return this._mdcSnackbar;
    }
    set mdcSnackbar(val) {
        this._mdcSnackbar = val;
    }

    show(message) {
        this.element.show({ message: message });
    }

}

export default Toast;
