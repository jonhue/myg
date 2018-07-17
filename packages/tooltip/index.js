import Myg from 'myg-base';
import Popper from 'popper.js/dist/popper';

class Tooltip extends Myg {
    constructor( element, options = {} ) {
      super( element, options );

      this._tooltip = document.createElement('div');
      this._tooltip.classList.add('myg-tooltip');
      this._tooltip.innerHTML = element.dataset.mygTooltip;
      element.parentElement.insertBefore( element, this._tooltip );

      if (!options.popper)
        options.popper = {};
      if (element.dataset.mygTooltipPlacement)
        options.popper.placement = element.dataset.mygTooltipPlacement;
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
      this.element.classList.add('-shown');
      this.popper.scheduleUpdate();
    }
    close() {
      this.element.classList.remove('-shown');
    }
    toggle() {
      if (this.element.classList.contains('-shown'))
        this.close()
      else
        this.open();
    }
}

export default Tooltip;
