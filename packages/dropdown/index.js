import Myg from 'myg-base';
import Popper from 'popper.js/dist/popper';

class Dropdown extends Myg {
  constructor(reference, element, options = {}) {
    super(element, options);

    this._reference = reference;
    this._reference.parentElement.insertBefore(element, this._reference);

    if (!options.popper)
      options.popper = {};
    if (element.dataset.mygDropdownPlacement)
      options.popper.placement = element.dataset.mygDropdownPlacement;
    this._popper = new Popper(this._reference, element, options.popper);

    document.addEventListener('click', (event) => {
      if (!element.contains(event.target) && !this._reference.contains(event.target))
        this.close();
    });
    element.querySelectorAll('a').forEach((element) => element.addEventListener('click', () => this.close()));

    if (options.eventType == 'hover') {
      this._reference.addEventListener('mouseover mouseout', () => this.toggle());
    } else
      this._reference.addEventListener('click', () => this.toggle());
  }

  get reference() {
    return this._reference;
  }
  set reference(val) {
    this._reference = val;
  }

  get popper() {
    return this._popper;
  }
  set popper(val) {
    this._popper = val;
  }

  open() {
    this.element.classList.add('-shown');
    this.popper.scheduleUpdate();
  }
  close() {
    this.element.classList.remove('-shown');
  }
  toggle() {
    if (this.element.classList.contains('-shown'))
      this.close();
    else
      this.open();
  }

  static initAll(elements, options = {}) {
    let arr = [];
    for (let obj of elements) {
      arr.push(new this(document.querySelector(obj.dataset.mygDropdownReference), obj, options));
    }
    return arr;
  }
}

export default Dropdown;
