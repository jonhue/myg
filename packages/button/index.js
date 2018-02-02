import Myg from '@myg/base';
import {$, jQuery} from 'jquery';

class Button extends Myg {

    showLoader() {
        let el = $(this.element);
        el.css({ 'width': el.outerWidth() }).addClass('loading');
    	el.find('span').addClass('invisible');
        setTimeout(function() {
            el.find('svg').fadeIn(250);
        }, 250);
    }
    hideLoader() {
        let el = $(this.element);
        el.find('svg').fadeOut(250);
        setTimeout(function() {
            el.removeAttr('style').removeClass('loading');
        	el.find('span').removeClass('invisible');
        }, 250);
    }
    toggleLoader() {
        if ( $(this.element).hasClass('loading') )
            this.hideLoader()
        else
            this.showLoader();
    }

}

export default Button;
