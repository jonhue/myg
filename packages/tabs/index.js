import Myg from 'myg-base';
// import {MDCTab} from '@material/tabs';
import {MDCTabBar} from '@material/tabs';

class Tabs extends Myg {
  constructor(element, options = {}) {
    super(element, options);
    this._panels = document.querySelector('.myg-tabs__panels');
    this._mdcTabBar = new MDCTabBar(element);
    this._mdcTabBar.tabs.forEach((tab) => {
      tab.preventDefaultOnClick = true;
    });
    this._mdcTabBar.listen('MDCTabBar:change', ({ detail: tabs }) => this.update(tabs.activeTabIndex));
    if (document.querySelector('#myg-tabs__panel--success')) {
      this.showContent('#myg-tabs__panel--success');
    } else {
      if (this._mdcTabBar.activeTabIndex == -1)
        this.showContent(this.element.querySelector('a[role="tab"]:nth-child(' + 1 + ')').getAttribute('href'));
      else
        this.showContent(this.element.querySelector('a[role="tab"]:nth-child(' + (this._mdcTabBar.activeTabIndex + 1) + ')').getAttribute('href'));
    }
  }

  get panels() {
    return this._panels;
  }
  set panels(val) {
    this._panels = val;
  }

  get mdcTabBar() {
    return this._mdcTabBar;
  }
  set mdcTabBar(val) {
    this._mdcTabBar = val;
  }

  showLoader() {
    let loader = this.panels.querySelector('.myg-tabs__loader');
    loader.classList.add('-shown');
  }
  hideLoader() {
    let loader = this.panels.querySelector('.myg-tabs__loader');
    loader.classList.remove('-shown');
  }
  toggleLoader() {
    let loader = this.panels.querySelector('.myg-tabs__loader');
    if (loader.classList.contains('-shown'))
      this.hideLoader();
    else
      this.showLoader();
  }

  showContent(id) {
    this.panels.querySelector('.myg-tabs__panel' + id).classList.add('-shown');
  }
  hideContent() {
    if (this.panels.querySelector('.myg-tabs__panel.-shown'))
      this.panels.querySelector('.myg-tabs__panel.-shown').classList.remove('-shown');
  }

  update(i) {
    triggerEvent(document, 'myg-tabs:switch');
    let tab = this.element.querySelector('a[role="tab"]:nth-child(' + ( i + 1 ) + ')');
    if (tab.getAttribute('href')[0] == '#') {
      this.hideContent();
      setTimeout(() => this.showContent(tab.getAttribute('href')), 250);
    } else {
      this.hideContent();
      this.showLoader();
      this.load(tab.getAttribute('href'), (status, data) => {
        if (status >= 200 && status < 400) {
          document.pageTitle = data.title;
          window.history.pushState({ 'html': data, 'pageTitle': data.title }, data.title, tab.getAttribute('href'));
          this.render(data);
          this.hideLoader();
          setTimeout(() => this.showContent('#myg-tabs__panel--success'), 250);
        } else {
          this.hideLoader();
          setTimeout(() => this.showContent('#myg-tabs__panel--error'), 250);
        }
      });
    }
  }

  render(data) {
    triggerEvent(document, 'myg-tabs:before-render');
    let panel = this.panels.querySelector('.myg-tabs__panel#myg-tabs__panel--success');
    panel.innerHTML = data;
    let html = panel.querySelector('.myg-tabs__panel#myg-tabs__panel--success').innerHTML;
    panel.innerHTML = html;
    triggerEvent(document, 'myg-tabs:render');
  }
}


function triggerEvent(element, name, data = {}) {
  if (window.CustomEvent) {
    let event = new CustomEvent(name, { detail: data });
    element.dispatchEvent(event);
  } else {
    let event = document.createEvent('CustomEvent');
    event.initCustomEvent(name, true, true, data);
  }
}

export default Tabs;
