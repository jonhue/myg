# Drawers

## Usage

### Stylesheets

```sass
@import "myg-drawer/drawer"

// Include classes (optional)
+myg__classes--drawer
```

### Javascript

```js
import MygDrawer from 'myg-drawer';

document.addEventListener( 'ready', () => {
    const mygDrawer = new MygDrawer( document.querySelector('.myg-drawer'), {} );
})
```

or

```js
import * as myg from 'myg/src/myg';
const MygDrawer = myg.MygDrawer;

document.addEventListener( 'ready', () => {
    const mygDrawer = new MygDrawer( document.querySelector('.myg-drawer'), {} );
})
```
