# Progress Bars

## Usage

### Stylesheets

```sass
@import "myg-progress/progress"
```

### Javascript

```js
import MygProgress from 'myg-progress';

document.addEventListener( 'ready', () => {
    const mygProgresses = MygProgress.initAll( document.querySelectorAll('.myg-progress'), {} );
})
```

or

```js
import * as myg from 'myg/src/myg';
const MygProgress = myg.MygProgress;

document.addEventListener( 'ready', () => {
    const mygProgresses = MygProgress.initAll( document.querySelectorAll('.myg-progress'), {} );
})
```
