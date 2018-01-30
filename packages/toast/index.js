import Myg from '@myg/base';
import {MDCSnackbar, MDCSnackbarFoundation} from '@material/snackbar';

class Toast extends Myg {

    constructor(el) {
        this._snackbar = new MDCSnackbar(el);
    }

    get snackbar() {
        return this._snackbar;
    }
    set snackbar(val) {
        this._snackbar = val;
    }

    show(message) {
        self.snackbar.show({ message: message });
    }

}

export default Toast;
