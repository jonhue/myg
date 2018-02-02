import Myg from '@myg/base';
import {$, jQuery} from 'jquery';

class Footer extends Myg {

    constructor(element) {
        super;
        if ( $(element).hasClass('myg-footer--stick') )
            this.stick();
    }

    stick() {
        let el = $(this.element);
        el.parent().css( 'marginBottom', -el.outerHeight() );
    }

    show() {
        $(this.element).removeAttr('style');
    }
    hide() {
        let el = $(this.element);
        el.css( 'bottom', el.height() );
    }
    toggle() {
        if ( $(this.element).is('[style]') )
            this.show()
        else
            this.hide();
    }

}

export default Footer;
