# Menus

## Usage

### Stylesheets

```sass
@import "myg-menu/menu"
```

### Javascript

```js
import MygMenu from 'myg-menu';

document.addEventListener( 'ready', () => {
  const mygMenu = new MygMenu( document.querySelector('.myg-menu'), {} );
})
```

or

```js
import * as myg from 'myg/src/myg';
const MygMenu = myg.MygMenu;

document.addEventListener( 'ready', () => {
  const mygMenu = new MygMenu( document.querySelector('.myg-menu'), {} );
})
```
