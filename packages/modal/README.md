# Modals

## Usage

### Stylesheets

```sass
@import "myg-modal/modal"
```

### Javascript

```js
import MygModal from 'myg-modal';

document.addEventListener( 'ready', () => {
    const mygModals = MygModal.initAll( document.querySelectorAll('.myg-modal'), {} );
})
```

or

```js
import * as myg from 'myg/src/myg';
const MygModal = myg.MygModal;

document.addEventListener( 'ready', () => {
    const mygModals = MygModal.initAll( document.querySelectorAll('.myg-modal'), {} );
})
```
