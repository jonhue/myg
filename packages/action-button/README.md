# Action Buttons

## Usage

### Stylesheets

```sass
@import "myg-action-button/action-button"

// Include classes (optional)
+myg-action-button--classes
```

### Javascript

```js
import MygActionButton from 'myg-action-button';

document.addEventListener( 'turbolinks:load', () => {
    const mygActionButton = new MygActionButton( document.querySelector('.myg-action-button'), {} );
})
```

or

```js
import * as myg from 'myg/src/myg';
const MygActionButton = myg.MygActionButton;

document.addEventListener( 'turbolinks:load', () => {
    const mygActionButton = new MygActionButton( document.querySelector('.myg-action-button'), {} );
})
```
