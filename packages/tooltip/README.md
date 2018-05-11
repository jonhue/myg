# Tooltips

## Usage

### Stylesheets

```sass
@import "myg-tooltip/tooltip"

// Include classes (optional)
+myg__classes--tooltip
```

### Javascript

```js
import MygTooltip from 'myg-tooltip';

document.addEventListener( 'ready', () => {
    const mygTooltips = MygTooltip.initAll( document.querySelectorAll('[data-myg-tooltip]'), {} );
})
```

or

```js
import * as myg from 'myg/src/myg';
const MygTooltip = myg.MygTooltip;

document.addEventListener( 'ready', () => {
    const mygTooltips = MygTooltip.initAll( document.querySelectorAll('[data-myg-tooltip]'), {} );
})
```
