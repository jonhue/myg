# Form Fields

## Usage

### Stylesheets

```sass
@import "myg-form-field/form-field"

// Include classes (optional)
+myg__classes--form-field
```

### Javascript

```js
import MygFormField from 'myg-form-field';

document.addEventListener( 'ready', () => {
  const mygFormFields = MygFormField.initAll( document.querySelectorAll('.myg-form-field'), {} );
})
```

or

```js
import * as myg from 'myg/src/myg';
const MygFormField = myg.MygFormField;

document.addEventListener( 'ready', () => {
  const mygFormFields = MygFormField.initAll( document.querySelectorAll('.myg-form-field'), {} );
})
```
