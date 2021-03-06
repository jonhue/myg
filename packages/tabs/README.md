# Tabs

## Usage

### Stylesheets

```sass
@import "myg-tabs/tabs"

// Include classes (optional)
+myg__classes--tabs
```

### Javascript

```js
import MygTabs from 'myg-tabs';

document.addEventListener( 'ready', () => {
  const mygTabs = MygTabs.initAll( document.querySelectorAll('.myg-tabs'), {} );
})
```

or

```js
import * as myg from 'myg/src/myg';

document.addEventListener( 'ready', () => {
  const mygTabs = MygTabs.initAll( document.querySelectorAll('.myg-tabs'), {} );
})
```

### Synchronous

```html
<nav class="myg-tabs mdc-tab-bar" role="tablist">
  <a role="tab" aria-controls="panel-1" class="mdc-tab mdc-tab--active" href="#panel-1">Item One</a>
  <a role="tab" aria-controls="panel-2" class="mdc-tab" href="#panel-2">Item Two</a>
  <a role="tab" aria-controls="panel-3" class="mdc-tab" href="#panel-3">Item Three</a>
  <span class="mdc-tab-bar__indicator"></span>
</nav>
<div class="myg-tabs__panels">
  <div class="myg-tabs__panel -shown" id="panel-1" role="tabpanel" aria-hidden="false">Item One</div>
  <div class="myg-tabs__panel" id="panel-2" role="tabpanel" aria-hidden="true">Item Two</div>
  <div class="myg-tabs__panel" id="panel-3" role="tabpanel" aria-hidden="true">Item Three</div>
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
<div class="myg-tabs__panels">
  <div class="myg-tabs__loader">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px" viewBox="0 0 24 24"><g transform="translate(0, 0)"><g class="nc-loop_bars-rotate-24" transform="rotate(270 12 12)"> <rect x="11" fill="#444444" width="2" height="6"></rect> <rect x="17.3639603" y="2.636039" transform="matrix(0.7071068 0.7071068 -0.7071068 0.7071068 9.3639612 -11.3345242)" fill="#444444" width="2" height="6" style="opacity: 0.4;"></rect> <rect x="18" y="11" fill="#444444" width="6" height="2" style="opacity: 0.4;"></rect> <rect x="17.3639603" y="15.3639612" transform="matrix(-0.7071068 0.7071068 -0.7071068 -0.7071068 44.3345222 18.3639603)" fill="#444444" width="2" height="6" style="opacity: 0.4;"></rect> <rect x="11" y="18" fill="#444444" width="2" height="6" style="opacity: 0.4;"></rect> <rect x="4.6360388" y="15.3639612" transform="matrix(-0.7071068 -0.7071068 0.7071068 -0.7071068 -3.363961 35.3345222)" fill="#444444" width="2" height="6" style="opacity: 0.4;"></rect> <rect x="0" y="11" fill="#444444" width="6" height="2" style="opacity: 0.5;"></rect> <rect x="4.6360388" y="2.636039" transform="matrix(0.7071068 -0.7071068 0.7071068 0.7071068 -2.3345237 5.6360388)" fill="#444444" width="2" height="6" style="opacity: 0.8;"></rect> </g> <script>!function(){function t(t){this.element=t,this.animationId,this.start=null,this.init()}if(!window.requestAnimationFrame){var i=null;window.requestAnimationFrame=function(t,n){var e=(new Date).getTime();i||(i=e);var a=Math.max(0,16-(e-i)),o=window.setTimeout(function(){t(e+a)},a);return i=e+a,o}}t.prototype.init=function(){var t=this;this.animationId=window.requestAnimationFrame(t.triggerAnimation.bind(t))},t.prototype.reset=function(){var t=this;window.cancelAnimationFrame(t.animationId)},t.prototype.triggerAnimation=function(t){var i=this;this.start||(this.start=t);var n=t-this.start;800&gt;n||(this.start=this.start+800),this.element.setAttribute("transform","rotate("+parseInt(Math.min(n/100,8))%8*45+" 12 12)");if(document.documentElement.contains(this.element))window.requestAnimationFrame(i.triggerAnimation.bind(i))};var n=document.getElementsByClassName("nc-loop_bars-rotate-24"),e=[];if(n)for(var a=0;n.length&gt;a;a++)!function(i){e.push(new t(n[i]))}(a);document.addEventListener("visibilitychange",function(){"hidden"==document.visibilityState?e.forEach(function(t){t.reset()}):e.forEach(function(t){t.init()})})}();</script></g></svg>
  </div>
  <div class="myg-tabs__panel" id="myg-tabs__panel--success" role="tabpanel" aria-hidden="true"></div>
  <div class="myg-tabs__panel" id="myg-tabs__panel--error" role="tabpanel" aria-hidden="true"></div>
</div>
```

**Note:** Asynchronous and synchronous tabs can be mixed.
