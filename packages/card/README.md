# Cards

## Usage

### Stylesheets

```sass
@import "myg-cards/cards"

// Include classes (optional)
+myg-card--classes
```

### Javascript

```js
import MygCard from 'myg-cards';

document.addEventListener( 'ready', () => {
    const mygCards = MygCard.initAll( document.querySelectorAll('.myg-card'), {} );
})
```

or

```js
import * as myg from 'myg-src/myg';
const MygCard = myg.MygCard;

document.addEventListener( 'ready', () => {
    const mygCards = MygCard.initAll( document.querySelectorAll('.myg-card'), {} );
})
```
