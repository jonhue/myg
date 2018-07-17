import Myg from 'myg-base';
import {MDCToolbar, MDCToolbarFoundation} from '@material/toolbar';

class Toolbar extends Myg {
    constructor( element, options = {} ) {
      super( element, options );
      this._mdcToolbar = new MDCToolbar(element);
    }

    get mdcToolbar() {
      return this._mdcToolbar;
    }
    set mdcToolbar(val) {
      this._mdcToolbar = val;
    }

    show() {
      this.element.style.transform = '';
    }
    hide() {
      this.element.style.transform = 'translateY(' + -this.element.offsetHeight + 'px)';
    }

    onScroll( lastScrollTop, delta ) {
      let scrollTop = window.scrollY || window.scrollTop || document.querySelector('html').scrollTop;

      if ( Math.abs( lastScrollTop - scrollTop ) <= delta )
        return scrollTop;

      if ( scrollTop > lastScrollTop && scrollTop > this.element.offsetHeight )
        this.hide()
      else
        this.show();

      return scrollTop;
    }
}

export default Toolbar;
