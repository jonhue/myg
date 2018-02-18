import Myg from 'myg-base';
import {MDCTemporaryDrawer, MDCTemporaryDrawerFoundation, util} from '@material/drawer';

class Drawer extends Myg {

    constructor( element, options = {} ) {
        super( element, options );
        this._mdcDrawer = new MDCTemporaryDrawer(element);
    }

    get mdcDrawer() {
        return this._mdcDrawer;
    }
    set mdcDrawer(val) {
        this._mdcDrawer = val;
    }

    open() {
        this.mdcDrawer.open = true;
    }
    close() {
        this.mdcDrawer.open = false;
    }
    toggle() {
        this.mdcDrawer.open = !this.element.open;
    }

}

export default Drawer;
