import Myg from 'myg-base';
import {MDCLinearProgressFoundation} from '@material/linear-progress';

class Progress extends Myg {

    constructor( element, options = {} ) {
        super();
        this._mdcLinearProgress = new MDCLinearProgress(element);
    }

    get mdcLinearProgress() {
        return this._mdcLinearProgress;
    }
    set mdcLinearProgress(val) {
        this._mdcLinearProgress = val;
    }

}

export default Progress;
