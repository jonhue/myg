# Titlebars

## Usage

### Stylesheets

```sass
@import "myg-titlebar/titlebar"

// Include classes (optional)
+myg__classes--titlebar
```

### Javascript

```js
import MygTitlebar from 'myg-titlebar';

document.addEventListener( 'ready', () => {
    const mygTitlebar = new MygTitlebar( document.querySelector('.myg-titlebar'), {} );
})
```

or

```js
import * as myg from 'myg/src/myg';
const MygTitlebar = myg.MygTitlebar;

document.addEventListener( 'ready', () => {
    const mygTitlebar = new MygTitlebar( document.querySelector('.myg-titlebar'), {} );
})
```
