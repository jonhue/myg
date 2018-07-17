import Myg from 'myg-base';

class Field extends Myg {
  constructor( element, options = {} ) {
    super( element, options = {} );
    if (this._element.querySelector('label'))
      this._placeholder = this._element.querySelectorAll('label')[this._element.querySelectorAll('label').length - 1].innerHTML;
    if (this._element.classList.contains('myg-form-field--file')) {
      let self = this;
      element.addEventListener( 'change', function() {
        self.onchange(this);
      });
    }
  }

  get placeholder() {
    return this._placeholder;
  }
  set placeholder(val) {
    this._placeholder = val;
  }

  onchange(element) {
    let value = element.querySelector('input').value,
      startIndex = (value.indexOf('\\') >= 0 ? value.lastIndexOf('\\') : value.lastIndexOf('/')),
      filename = value.substring(startIndex);
    if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0)
      filename = filename.substring(1);
    this.element.querySelectorAll('label')[this.element.querySelectorAll('label').length - 1].innerHTML = filename || this.placeholder;
  }
}

export default Field;
