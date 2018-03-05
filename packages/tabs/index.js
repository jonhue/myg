import Myg from 'myg-base';
import {MDCTab, MDCTabFoundation} from '@material/tabs';
import {MDCTabBar, MDCTabBarFoundation} from '@material/tabs';

class Tabs extends Myg {

    constructor( element, options = {} ) {
        super( element, options );
        this._panels = document.querySelector('.myg-tabs--panels');
        this._mdcTabBar = new MDCTabBar(element);
        this._mdcTabBar.tabs.forEach((tab) => {
            tab.preventDefaultOnClick = true;
        });
        this._mdcTabBar.listen( 'MDCTabBar:change', ({ detail: tabs }) => this.update(tabs.activeTabIndex) );
        this.showContent('#myg-tabs--panel--success');
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
        let loader = this.panels.querySelector('.myg-tabs--loader');
        loader.classList.add('myg-tabs--shown');
    }
    hideLoader() {
        let loader = this.panels.querySelector('.myg-tabs--loader');
        loader.classList.remove('myg-tabs--shown');
    }
    toggleLoader() {
        let loader = this.panels.querySelector('.myg-tabs--loader');
        if (loader.classList.contains('myg-tabs--shown'))
            this.hideLoader()
        else
            this.showLoader();
    }

    showContent(id) {
        this.panels.querySelector( '.myg-tabs--panel' + id ).classList.add('myg-tabs--shown');
    }
    hideContent() {
        if (this.panels.querySelector('.myg-tabs--panel.myg-tabs--shown'))
            this.panels.querySelector('.myg-tabs--panel.myg-tabs--shown').classList.remove('myg-tabs--shown');
    }

    update(i) {
        let tab = this.element.querySelector( 'a[role="tab"]:nth-child(' + ( i + 1 ) + ')' );
        if ( tab.getAttribute('href')[0] == '#' ) {
            this.hideContent();
            setTimeout( () => this.showContent(tab.getAttribute('href')), 250 );
        } else {
            this.hideContent();
            this.showLoader();
            this.load( tab.getAttribute('href'), (status, data) => {
                if ( status >= 200 && status < 400 ) {
                    document.pageTitle = data.pageTitle;
                    window.history.pushState({ 'html': data.html, 'pageTitle': data.pageTitle }, data.pageTitle, tab.getAttribute('href'));
                    this.render(data);
                    this.hideLoader();
                    setTimeout( () => this.showContent('#myg-tabs--panel-success'), 250 );
                } else {
                    this.hideLoader();
                    setTimeout( () => this.showContent('#myg-tabs--panel-error'), 250 );
                };
            });
        };
    }

    render(data) {
        let panel = this.panels.querySelector('.myg-tabs--panel#myg-tabs--panel-success');
        panel.innerHTML = data.html;
        let html = panel.querySelector('.myg-tabs--panel#myg-tabs--panel-success').innerHTML;
        panel.innerHTML = html;
    }

}

export default Tabs;
