# Dialogs

## Usage

### Stylesheets

```sass
@import "myg-dialog/dialog"
```

### Javascript

```js
import MygDialog from 'myg-dialog';

document.addEventListener( 'ready', () => {
    const mygDialogs = MygDialog.initAll( document.querySelectorAll('.myg-dialog'), {} );
})
```

or

```js
import * as myg from 'myg-src/myg';
const MygDialog = myg.MygDialog;

document.addEventListener( 'ready', () => {
    const mygDialogs = MygDialog.initAll( document.querySelectorAll('.myg-dialog'), {} );
})
```
