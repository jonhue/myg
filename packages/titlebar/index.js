import Myg from 'myg-base';
import Welcomer from 'welcomer';

class Titlebar extends Myg {

    constructor( element, options = {} ) {
        super;
        this._welcomer = new Welcomer(options);
    }

    get welcomer() {
        return this._welcomer
    }
    set welcomer(val) {
        this._welcomer = val;
    }

}

export default Titlebar;
