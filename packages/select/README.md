# Select Menus

## Usage

### Stylesheets

```sass
@import "myg-select/select"
```

### Javascript

```js
import MygSelect from 'myg-select';

document.addEventListener( 'ready', () => {
    const mygSelects = MygSelect.initAll( document.querySelectorAll('.myg-select'), {} );
})
```

or

```js
import * as myg from 'myg/src/myg';
const MygSelect = myg.MygSelect;

document.addEventListener( 'ready', () => {
    const mygSelects = MygSelect.initAll( document.querySelectorAll('.myg-select'), {} );
})
```
