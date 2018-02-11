import Myg from 'myg-base';
import {MDCTab, MDCTabFoundation} from '@material/tabs';
import {MDCTabBar, MDCTabBarFoundation} from '@material/tabs';

class Tabs extends Myg {

    constructor( element, options = {} ) {
        super;
        this._panels = document.querySelector('.myg-tabs--panels');
        this._mdcTabBar = new MDCTabBar(element);
        this._mdcTabBar.tabs.forEach((tab) => {
            tab.preventDefaultOnClick = true;
        });
        this._mdcTabBar.listen( 'MDCTabBar:change', ({ detail: tabs }) => {
            update(tabs.activeTabIndex);
        });
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
        this.panels.querySelector('.myg-tabs--panel.myg-tabs--shown').classList.remove('myg-tabs--shown');
    }

    update(i) {
        let tab = this.element.querySelector( 'a[role="tab"]:nth-child(' + ( i + 1 ) + ')' );
        if ( tab.getAttribute('href')[0] == '#' ) {
            this.hideContent();
            setTimeout( () => this.showContent(tab.getAttribute('href')), 250 );
        } else {
            this.showLoader();
            this.load( tab.getAttribute('href'), (data, status) => {
                if ( status >= 200 && status < 400 ) {
                    this.render(data);
                } else {
                    this.error( status, data );
                };
                this.hideLoader();
                setTimeout( () => this.showContent('#myg-tabs--panel-async'), 250 );
            });
        };
    }

    render(data) {
        this.panels.querySelector('.myg-tabs--panel#myg-tabs--panel-async').innerHTML = data;
    }
    error( status, response ) {
        console.log(status);
        console.log(response);
        // render error message
    }

}

export default Tabs;
