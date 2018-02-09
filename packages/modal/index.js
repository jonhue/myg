import Myg from 'myg-base';
import Modalist from 'modalist';

class Modal extends Myg {

    constructor( element, options = {} ) {
        super;
        options.element = element;
        this._modalist = new Modalist(options);
    }

    get modalist() {
        return this._modalist;
    }
    set modalist(val) {
        this._modalist = val;
    }

}

export default Modal;
