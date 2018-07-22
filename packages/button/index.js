import Myg from 'myg-base';

class Button extends Myg {
  showLoader() {
    this.element.style.width = this.element.offsetWidth;
    this.element.classList.add('-loading');
    this.element.querySelector('span').classList.add('myg--invisible');
    setTimeout(() => {
      this.element.querySelector('.myg-button__loader').classList.add('myg--visible');
    }, 250);
  }
  hideLoader() {
    this.element.querySelector('.myg-button__loader').classList.remove('myg--visible');
    setTimeout(() => {
      this.element.style.width = '';
      this.element.classList.remove('-loading');
      this.element.querySelector('span').classList.remove('myg--invisible');
    }, 250);
  }
  toggleLoader() {
    if (this.element.classList.contains('-loading'))
      this.hideLoader();
    else
      this.showLoader();
  }
}

export default Button;
