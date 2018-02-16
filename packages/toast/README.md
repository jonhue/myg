# Toasts

## Usage

### Stylesheets

```sass
@import "myg-toast/toast"

// Include classes (optional)
+myg-toast--classes
```

### Javascript

```js
import MygToast from 'myg-toast';

document.addEventListener( 'ready', () => {
    const mygToast = new MygToast( document.querySelector('.myg-toast'), {} );
})
```

or

```js
import * as myg from 'myg/src/myg';
const MygToast = myg.MygToast;

document.addEventListener( 'ready', () => {
    const mygToast = new MygToast( document.querySelector('.myg-toast'), {} );
})
```
