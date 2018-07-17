# Slides

## Usage

### Stylesheets

```sass
@import "myg-slide/slide"
```

### Javascript

```js
import MygSlide from 'myg-slide';

document.addEventListener( 'ready', () => {
  const mygSlides = MygSlide.initAll( document.querySelectorAll('.myg-slide'), {} );
})
```

or

```js
import * as myg from 'myg/src/myg';
const MygSlide = myg.MygSlide;

document.addEventListener( 'ready', () => {
  const mygSlides = MygSlide.initAll( document.querySelectorAll('.myg-slide'), {} );
})
```
