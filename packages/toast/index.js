import Myg from '@myg/base';
import {MDCSnackbar, MDCSnackbarFoundation} from '@material/snackbar';

class Toast extends Myg {

    constructor(element) {
        this._element = new MDCSnackbar(element);
    }

    show(message) {
        this.element.show({ message: message });
    }

}

export default Toast;
