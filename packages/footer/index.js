import Myg from '@myg/base';

class Footer extends Myg {

    constructor(element) {
        super;
        if ( element.classList.contains('myg-footer--stick') )
            this.stick();
    }

    stick() {
        this.element.parentElement.style.marginBottom = -this.element.offsetHeight;
    }

    show() {
        this.element.classList.remove('covert');
        this.element.style.bottom = '';
    }
    hide() {
        this.element.classList.add('covert');
        this.element.style.bottom = this.element.offsetHeight;
    }
    toggle() {
        if ( $(this.element).style.bottom.length > 0 )
            this.show()
        else
            this.hide();
    }

}

export default Footer;
