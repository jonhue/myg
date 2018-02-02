class Myg {

    constructor( element, options = {} ) {
        this._element = element;
    }

    get element() {
        return this._element;
    }
    set element(val) {
        this._element = val;
    }

}

export default Myg;
