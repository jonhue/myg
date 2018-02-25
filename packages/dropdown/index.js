import Myg from 'myg-base';
import Popper from 'popper.js/dist/popper';

class Dropdown extends Myg {

    constructor( reference, element, options = {} ) {
        super( element, options );

        this._reference = reference;
        this._reference.parentElement.insertBefore( this._reference, element );

        this._popper = new Popper( this._reference, element, options.popper );

        if ( options.eventType == 'hover' ) {
            this._reference.addEventListener( 'mouseover mouseout', () => this.toggle() );
        } else
            this._reference.addEventListener( 'click', () => this.toggle() );
    }

    get reference() {
        return this._reference;
    }
    set reference(val) {
        this._reference = val;
    }

    get popper() {
        return this._popper;
    }
    set popper(val) {
        this._popper = val;
    }

    open() {
        this.element.classList.add('show');
    }
    close() {
        this.element.classList.remove('show');
    }
    toggle() {
        if (this.element.classList.contains('show'))
            this.close()
        else
            this.open();
    }

    static initAll( elements, options = {} ) {
        let arr = [];
        for ( let obj of elements ) {
            arr.push(new this( document.querySelector(obj.dataset.mygDropdownReference), obj, options ));
        }
        return arr;
    }

}

export default Dropdown;
