import Myg from '@myg/base';

class ActionButton extends Myg {

    constructor(el) {
        this._actionButton = el;
    }

    get actionButton() {
        return this._actionButton
    }
    set actionButton(val) {
        this._actionButton = val;
    }

    showActions() {

    }
    hideActions() {

    }
    toggleActions() {

    }

}

export default ActionButton;
