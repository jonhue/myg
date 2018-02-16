# Checkboxes

## Usage

### Stylesheets

```sass
@import "myg-checkbox/checkbox"

// Include classes (optional)
+myg-checkbox--classes
```

### Javascript

```js
import MygCheckbox from 'myg-checkbox';

document.addEventListener( 'ready', () => {
    const mygCheckboxes = MygCheckbox.initAll( document.querySelectorAll('.myg-checkbox'), {} );
})
```

or

```js
import * as myg from 'myg/src/myg';
const MygCheckbox = myg.MygCheckbox;

document.addEventListener( 'ready', () => {
    const mygCheckboxes = MygCheckbox.initAll( document.querySelectorAll('.myg-checkbox'), {} );
})
```
