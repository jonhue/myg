# Tooltips

## Usage

### Stylesheets

```sass
@import "myg-tooltip/tooltip"
```

### Javascript

```js
import MygTooltip from 'myg-tooltip';

document.addEventListener( 'ready', () => {
    const mygTooltips = MygTooltip.initAll( document.querySelectorAll('.myg-tooltip'), {} );
})
```

or

```js
import * as myg from 'myg/src/myg';
const MygTooltip = myg.MygTooltip;

document.addEventListener( 'ready', () => {
    const mygTooltips = MygTooltip.initAll( document.querySelectorAll('.myg-tooltip'), {} );
})
```
