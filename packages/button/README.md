# Buttons

## Usage

### Stylesheets

```sass
@import "myg-button/button"

// Include classes (optional)
+myg-button--classes
```

### Javascript

```js
import MygButton from 'myg-button';

document.addEventListener( 'ready', () => {
    const mygButtons = MygButton.initAll( document.querySelectorAll('.myg-button'), {} );
})
```

or

```js
import * as myg from 'myg-src/myg';
const MygButton = myg.MygButton;

document.addEventListener( 'ready', () => {
    const mygButtons = MygButton.initAll( document.querySelectorAll('.myg-button'), {} );
})
```
