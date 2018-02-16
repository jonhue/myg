# Dropdowns

## Usage

### Stylesheets

```sass
@import "myg-dropdown/dropdown"
```

### Javascript

```js
import MygDropdown from 'myg-dropdown';

document.addEventListener( 'ready', () => {
    const mygDropdowns = MygDropdown.initAll( document.querySelectorAll('.myg-dropdown'), {} );
})
```

or

```js
import * as myg from 'myg/src/myg';
const MygDropdown = myg.MygDropdown;

document.addEventListener( 'ready', () => {
    const mygDropdowns = MygDropdown.initAll( document.querySelectorAll('.myg-dropdown'), {} );
})
```
