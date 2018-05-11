# Radio Buttons

## Usage

### Stylesheets

```sass
@import "myg-radio/radio"

// Include classes (optional)
+myg__classes--radio
```

### Javascript

```js
import MygRadio from 'myg-radio';

document.addEventListener( 'ready', () => {
    const mygRadios = MygRadio.initAll( document.querySelectorAll('.myg-radio'), {} );
})
```

or

```js
import * as myg from 'myg/src/myg';
const MygRadio = myg.MygRadio;

document.addEventListener( 'ready', () => {
    const mygRadios = MygRadio.initAll( document.querySelectorAll('.myg-radio'), {} );
})
```
