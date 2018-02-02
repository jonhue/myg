import Myg from '@myg/base';

class Button extends Myg {

    showLoader() {
        this.element.style.width = this.element.offsetWidth;
        this.element.classList.add('loading');
        this.element.querySelector('span').classList.add('invisible');
        setTimeout(function() {
            this.element.querySelector('svg').classList.add('visible');
        }, 250);
    }
    hideLoader() {
        this.element.querySelector('svg').classList.remove('visible');
        setTimeout(function() {
            this.element.style.width = '';
            this.element.classList.remove('loading');
        	this.element.querySelector('span').classList.remove('invisible');
        }, 250);
    }
    toggleLoader() {
        if ( this.element.classList.contains('loading') )
            this.hideLoader()
        else
            this.showLoader();
    }

}

export default Button;
