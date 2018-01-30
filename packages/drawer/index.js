import Myg from '@myg/base';
import {MDCTemporaryDrawer, MDCTemporaryDrawerFoundation, util} from '@material/drawer';

class Drawer extends Myg {

    constructor(el) {
        this._drawer = new MDCTemporaryDrawer(el);
    }

    get drawer() {
        return this._drawer;
    }
    set drawer(val) {
        this._drawer = val;
    }

    open() {
        this.drawer.open = true;
    }
    close() {
        this.drawer.open = false;
    }
    toggle() {
        this.drawer.open = !this.drawer.open;
    }

}

export default Drawer;
