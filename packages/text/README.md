# Texts

## Usage

### Stylesheets

```sass
@import "myg-text/text"

// Include classes (optional)
+myg__classes--text
```

### Javascript

```js
import MygText from 'myg-text';

document.addEventListener( 'ready', () => {
    const mygTexts = MygText.initAll( document.querySelectorAll('.myg-text'), {} );
})
```

or

```js
import * as myg from 'myg/src/myg';
const MygText = myg.MygText;

document.addEventListener( 'ready', () => {
    const mygTexts = MygText.initAll( document.querySelectorAll('.myg-text'), {} );
})
```
