import Myg from 'myg-base';
import {MDCSnackbar, MDCSnackbarFoundation} from '@material/snackbar';

class Toast extends Myg {
    constructor( element, options = {} ) {
      super( element, options = {} );
      this._mdcSnackbar = new MDCSnackbar(element);
    }

    get mdcSnackbar() {
      return this._mdcSnackbar;
    }
    set mdcSnackbar(val) {
      this._mdcSnackbar = val;
    }

    show(options = {}) {
      this.element.classList.remove('error');
      this.element.classList.remove('success');
      this.mdcSnackbar.show(options);
    }
    error(options = {}) {
      this.element.classList.add('error');
      this.element.classList.remove('success');
      this.mdcSnackbar.show(options);
    }
    success(options = {}) {
      this.element.classList.remove('error');
      this.element.classList.add('success');
      this.mdcSnackbar.show(options);
    }
}

export default Toast;
