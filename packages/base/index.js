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

    load( url, callback ) {
        let request = new XMLHttpRequest();
        request.open( 'GET', url, true );
        request.onload = () => {
            callback( this.status, this.response );
        };
        request.onerror = () => {
            callback( this.status, this.response );
        };
        request.send();
    }

    static init( element, options = {} ) {
        if (element) {
            return new this( element, options );
        }
    }

    static initAll( elements, options = {} ) {
        let arr = [];
        for ( let obj of elements ) {
            arr.push(new this( obj, options ));
        }
        return arr;
    }

}

export default Myg;
