import Myg from 'myg-base';
import Modalist from 'modalist';

class Modal extends Myg {

    constructor( element, options = {} ) {
        super( element, options );
        options.element = element;
        document.addEventListener( 'modalist:render', () => Modalist.init() );
        Modalist.init();
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
