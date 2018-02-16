# Sliders

## Usage

### Stylesheets

```sass
@import "myg-slider/slider"
```

### Javascript

```js
import MygSlider from 'myg-slider';

document.addEventListener( 'ready', () => {
    const mygSLiders = MygSLider.initAll( document.querySelectorAll('.myg-slider'), {} );
})
```

or

```js
import * as myg from 'myg/src/myg';
const MygSlider = myg.MygSlider;

document.addEventListener( 'ready', () => {
    const mygSLiders = MygSLider.initAll( document.querySelectorAll('.myg-slider'), {} );
})
```
