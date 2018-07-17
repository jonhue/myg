# Themes

## Usage

### Stylesheets

```sass
@import "myg-theme/theme"

// Include classes (optional)
+myg__classes--theme
```

### Javascript

```js
import MygTheme from 'myg-theme';

document.addEventListener( 'ready', () => {
  const mygTheme = new MygTheme( document.querySelector('html'), {} );
})
```

or

```js
import * as myg from 'myg/src/myg';
const MygTheme = myg.MygTheme;

document.addEventListener( 'ready', () => {
  const mygTheme = new MygTheme( document.querySelector('html'), {} );
})
```
