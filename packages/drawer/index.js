import Myg from '@myg/base';
import {MDCTemporaryDrawer, MDCTemporaryDrawerFoundation, util} from '@material/drawer';

class Drawer extends Myg {

    constructor(element) {
        super;
        this._element = new MDCTemporaryDrawer(element);
    }

    open() {
        this.element.open = true;
    }
    close() {
        this.element.open = false;
    }
    toggle() {
        this.element.open = !this.element.open;
    }

}

export default Drawer;
