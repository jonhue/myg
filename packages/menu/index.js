import Myg from 'myg-base';
import {MDCMenu} from '@material/menu';

class Menu extends Myg {
  constructor(element, options = {}) {
    super(element, options);
    this._mdcMenu = new MDCMenu(element);
  }

  get mdcMenu() {
    return this._mdcMenu;
  }
  set mdcMenu(val) {
    this._mdcMenu = val;
  }
}

export default Menu;
