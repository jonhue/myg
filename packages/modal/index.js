import Myg from 'myg-base';
import Modalist from 'modalist';

class Modal extends Myg {

    constructor( element, options = {} ) {
        super();
        options.element = element;
        this._modalist = new Modalist(options);
        document.addEventListener( 'ready modalist:render', () => Modalist.init() );
    }

    get modalist() {
        return this._modalist;
    }
    set modalist(val) {
        this._modalist = val;
    }

}

export default Modal;
