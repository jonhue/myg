import Myg from '@myg/base';
import {MDCToolbar, MDCToolbarFoundation} from '@material/toolbar';

class Toolbar extends Myg {

    constructor( element, options = {} ) {
        super;
        this._mdcToolbar = new MDCToolbar(element);
    }

    show() {
        this.element.style.transform = '';
    }
    hide() {
        this.element.style.transform = 'translateY(' + -this.element.offsetHeight + 'px)';
    }

    onScroll( lastScrollTop, delta ) {
        let scrollTop = document.querySelector('body').scrollTop;

        if ( Math.abs( lastScrollTop - scrollTop ) <= delta )
            return;

        if ( scrollTop > lastScrollTop && scrollTop > this.element.offsetHeight )
            this.hide()
        else if ( scrollTop + window.height < document.height )
            this.show();

        return scrollTop;
    }

}

export default Toolbar;
