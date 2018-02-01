import Myg from '@myg/base';
import {$, jQuery} from 'jquery';

class Footer extends Myg {

    constructor(el) {
        this._footer = el;
        if ( $(el).hasClass('myg-footer--stick') )
            this.stick();
    }

    get footer() {
        return this._footer;
    }
    set footer(val) {
        this._footer = val;
    }

    stick() {
        let el = $(this.footer);
        el.parent().css( 'marginBottom', -el.outerHeight() );
    }

    show() {
        $(this.footer).removeAttr('style');
    }
    hide() {
        let el = $(this.footer);
        el.css( 'bottom', el.height() );
    }
    toggle() {
        if ( $(this.footer).is('[style]') )
            this.show()
        else
            this.hide();
    }

}

export default Footer;
