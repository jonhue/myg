class Myg {

    constructor( element, options = {} ) {
        this._element = element;
        this._options = options;
    }

    get element() {
        return this._element;
    }
    set element(val) {
        this._element = val;
    }

    get options() {
        return this._options;
    }
    set options(val) {
        this._options = val;
    }

    load( url, callback ) {
        triggerEvent( document, 'myg:request-start' );
        let request = new XMLHttpRequest();
        request.open( 'GET', url, true );
        request.onload = function() {
            triggerEvent( document, 'myg:request-end' );
            callback( this.status, this.responseText );
        };
        request.onerror = function() {
            triggerEvent( document, 'myg:request-end' );
            callback( this.status, this.responseText );
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
