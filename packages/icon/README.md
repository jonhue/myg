# Icons

## Usage

### Stylesheets

```sass
@import "myg-icon/icon"
```

### Javascript

**ES6**

```js
import MygIcon from 'myg-icon';

document.addEventListener( 'ready', () => {
    const mygIcons = MygIcon.initAll( document.querySelectorAll('.myg-icon'), {} );
})
```

or

```js
import * as myg from 'myg/src/myg';
const MygIcon = myg.MygIcon;
```
