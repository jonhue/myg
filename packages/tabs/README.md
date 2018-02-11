# Tabs

## Usage

### Stylesheets

**Sass**

```sass
@import "myg-tabs/tabs"
```

### Javascript

**ES6**

```js
import MygTab from 'myg-tabs';
```

or

```js
import * as myg from 'myg-src/myg';
const MygTab = myg.MygTab;
```

### Synchronous

```html
<nav class="myg-tabs mdc-tab-bar" role="tablist">
    <a role="tab" aria-controls="panel-1" class="mdc-tab mdc-tab--active" href="#panel-1">Item One</a>
    <a role="tab" aria-controls="panel-2" class="mdc-tab" href="#panel-2">Item Two</a>
    <a role="tab" aria-controls="panel-3" class="mdc-tab" href="#panel-3">Item Three</a>
    <span class="mdc-tab-bar__indicator"></span>
</nav>
<div class="myg-tabs--panels">
    <div class="myg-tabs--panel myg-tabs--shown" id="panel-1" role="tabpanel" aria-hidden="false">Item One</div>
    <div class="myg-tabs--panel" id="panel-2" role="tabpanel" aria-hidden="true">Item Two</div>
    <div class="myg-tabs--panel" id="panel-3" role="tabpanel" aria-hidden="true">Item Three</div>
</div>
```

### Asynchronous

```html
<nav class="myg-tabs mdc-tab-bar" role="tablist">
    <a role="tab" aria-controls="panel-1" class="mdc-tab mdc-tab--active" href="/settings/account">Account</a>
    <a role="tab" aria-controls="panel-2" class="mdc-tab" href="/settings/notifications">Notifications</a>
    <a role="tab" aria-controls="panel-2" class="mdc-tab" href="/settings/billing">Billing</a>
    <span class="mdc-tab-bar__indicator"></span>
</nav>
<div class="myg-tabs--panels">
    <div class="myg-tabs--panel" id="myg-tabs--panel-success" role="tabpanel" aria-hidden="true"></div>
    <div class="myg-tabs--panel" id="myg-tabs--panel-error" aria-hidden="true"></div>
</div>
```

**Note:** Asynchronous and synchronous tabs can be mixed.
