# Footers

## Usage

### Stylesheets

```sass
@import "myg-footer/footer"

// Include classes (optional)
+myg__classes--footer
```

### Javascript

```js
import MygFooter from 'myg-footer';

document.addEventListener( 'ready', () => {
    const mygFooters = MygFooter.initAll( document.querySelectorAll('.myg-footer'), {} );
})
```

or

```js
import * as myg from 'myg/src/myg';
const MygFooter = myg.MygFooter;

document.addEventListener( 'ready', () => {
    const mygFooters = MygFooter.initAll( document.querySelectorAll('.myg-footer'), {} );
})
```
