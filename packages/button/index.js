import Myg from '@myg/base';
import {$, jQuery} from 'jquery';

class Button extends Myg {

    constructor(el) {
        this._button = el;
    }

    get button() {
        return this._button;
    }
    set button(val) {
        this._button = val;
    }

    showLoader() {
        let el = $(this.button);
        el.css({ 'width': el.outerWidth() }).addClass('loading');
    	el.find('span').addClass('invisible');
        setTimeout(function() {
            el.find('svg').fadeIn(250);
        }, 250);
    }
    hideLoader() {
        let el = $(this.button);
        el.find('svg').fadeOut(250);
        setTimeout(function() {
            el.removeAttr('style').removeClass('loading');
        	el.find('span').removeClass('invisible');
        }, 250);
    }
    toggleLoader() {
        if ( $(this.button).hasClass('loading') )
            this.hideLoader()
        else
            this.showLoader();
    }

}

export default Button;
