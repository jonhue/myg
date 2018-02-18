import Myg from 'myg-base';
import * as flickity from 'flickity';

class Slide extends Myg {

    constructor( element, options = {} ) {
        super();
        this._flickity = new Flickity( element, options );
    }

    get flickity() {
        return this._flickity;
    }
    set flickity(val) {
        this._flickity = val;
    }

}

export default Slide;
