import Myg from 'myg-base';
import {MDCSlider} from '@material/slider';

class Slider extends Myg {
  constructor(element, options = {}) {
    super(element, options);
    this._mdcSlider = new MDCSlider(element);
  }

  get mdcSlider() {
    return this._mdcSlider;
  }
  set mdcSlider(val) {
    this._mdcSlider = val;
  }
}

export default Slider;
