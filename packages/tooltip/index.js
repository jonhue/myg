import Myg from 'myg-base';
import Popper from 'popper.js/dist/popper';

class Tooltip extends Myg {

    constructor( element, options = {} ) {
        super( element, options );

        this._tooltip = document.createElement('div');
        this._tooltip.classList.add('myg-tooltip');
        this._tooltip.innerHTML = element.dataset.mygTooltip;
        element.parentElement.insertBefore( element, this._tooltip );

        this._popper = new Popper( element, this._tooltip, options );

        element.addEventListener( 'mouseover mouseout', () => this.toggle() );
    }

    get tooltip() {
        return this._tooltip;
    }
    set tooltip(val) {
        this._tooltip = val;
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

}

export default Tooltip;
