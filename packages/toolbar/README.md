# Toolbars

## Usage

### Stylesheets

```sass
@import "myg-toolbar/toolbar"

// Include classes (optional)
+myg__classes--toolbar
```

### Javascript

```js
import MygToolbar from 'myg-toolbar';

document.addEventListener( 'ready', () => {
  const mygToolbar = new MygToolbar( document.querySelector('.myg-toolbar'), {} );
})
```

or

```js
import * as myg from 'myg/src/myg';
const MygToolbar = myg.MygToolbar;

document.addEventListener( 'ready', () => {
  const mygToolbar = new MygToolbar( document.querySelector('.myg-toolbar'), {} );
})
```
