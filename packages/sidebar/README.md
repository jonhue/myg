# Sidebars

## Usage

### Stylesheets

```sass
@import "myg-sidebar/sidebar"
```

### Javascript

```js
import MygSidebar from 'myg-sidebar';

document.addEventListener( 'ready', () => {
  const mygSidebar = new MygSidebar( document.querySelector('.myg-sidebar'), {} );
})
```

or

```js
import * as myg from 'myg/src/myg';
const MygSidebar = myg.MygSidebar;

document.addEventListener( 'ready', () => {
  const mygSidebar = new MygSidebar( document.querySelector('.myg-sidebar'), {} );
})
```
