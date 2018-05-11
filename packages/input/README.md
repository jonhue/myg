# Inputs

## Usage

### Stylesheets

```sass
@import "myg-input/input"

// Include classes (optional)
+myg__classes--input
```

### Javascript

```js
import MygInput from 'myg-input';

document.addEventListener( 'ready', () => {
    const mygInputs = MygInput.initAll( document.querySelectorAll('.myg-input'), {} );
})
```

or

```js
import * as myg from 'myg/src/myg';
const MygInput = myg.MygInput;

document.addEventListener( 'ready', () => {
    const mygInputs = MygInput.initAll( document.querySelectorAll('.myg-input'), {} );
})
```
