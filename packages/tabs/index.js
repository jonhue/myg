import Myg from '@myg/base';
import {MDCTab, MDCTabFoundation} from '@material/tabs';
import {MDCTabBar, MDCTabBarFoundation} from '@material/tabs';

class Tabs extends Myg {

    constructor( element, options = {} ) {
        super;
        this._mdcTabBar = new MDCTabBar(element);
    }

    get mdcTabBar() {
        return this._mdcTabBar;
    }
    set mdcTabBar(val) {
        this._mdcTabBar = val;
    }

}

export default Tabs;
