# Myg

![NPM Version](https://img.shields.io/npm/v/myg.svg)
<img src="https://travis-ci.org/jonhue/myg.svg?branch=master" />

An opinionated & modular state-of-the-web framework.

**Disclaimer:** Myg really is a state-of-the-web framework. It utilizes CSS variables, CSS grid and ES6. Better be aware before throwing it around.

---

## Table of Contents

* [Philosophy](#philosophy)
* [Usage](#usage)
    * [Stylesheets](#stylesheets)
    * [Javascript](#javascript)
    * [Getting started](#getting-started)
* [Components](#components)
* [To Do](#to-do)
* [Contributing](#contributing)
    * [Contributors](#contributors)
    * [Semantic Versioning](#semantic-versioning)
* [License](#license)

---

## Philosophy

**Modular:** Myg includes a lot of UI elements. Because everyone of them is separately published on NPM, you can just include what you actually use.

**Lightweight:** Mixins > Classes. Myg's CSS classes are entirely optional to minimize file size.

**Opinionated:** Opinionated components prevent you from polluting your DOM.

**Modern:** Myg uses the latest web technologies to support its rich feature set while remaining lightweight.

---

## Usage

### Stylesheets

**Sass**

```sass
@import "myg/src/myg"
```

**CSS3**

```css
@import "myg/dist/myg.min";
```

### Javascript

**ES6**

```js
import * as myg from 'myg';
```

**ES5 (Sprockets)**

```js
//= require myg/dist/myg
```

### Getting started

...

---

## Components

* **[Action Buttons](packages/action-button)**
* **[Animate](packages/animate)**
* **[Base](packages/base)**
* **[Buttons](packages/button)**
* **[Cards](packages/card)**
* **[Checkboxes](packages/checkbox)**
* **[Dialogs](packages/dialog)**
* **[Drawers](packages/drawer)**
* **[Dropdowns](packages/dropdown)**
* **[Elevation](packages/elevation)**
* **[Fonts](packages/font)**
* **[Footers](packages/footer)**
* **[Form Fields](packages/form-field)**
* **[Grids](packages/grid)**
* **[Icons](packages/icon)**
* **[Inputs](packages/input)**
* **[Labels](packages/label)**
* **[Layout](packages/layout)**
* **[Lists](packages/list)**
* **[Menus](packages/menu)**
* **[Modals](packages/modal)**
* **[Progress Bars](packages/progress)**
* **[Radio Buttons](packages/radio)**
* **[Select Menus](packages/select)**
* **[Sidebars](packages/sidebar)**
* **[Slides](packages/slide)**
* **[Sliders](packages/slider)**
* **[Spacing](packages/spacing)**
* **[Switches](packages/switch)**
* **[Tabs](packages/tabs)**
* **[Texts](packages/text)**
* **[Themes](packages/theme)**
* **[Titlebars](packages/titlebar)**
* **[Toasts](packages/toast)**
* **[Toolbars](packages/toolbar)**
* **[Tooltips](packages/tooltip)**

---

## To Do

[Here](https://github.com/jonhue/myg/projects/1) is the full list of current projects.

To propose your ideas, initiate the discussion by adding a [new issue](https://github.com/jonhue/myg/issues/new).

---

## Contributing

We hope that you will consider contributing to Myg. Please read this short overview for some information about how to get started:

[Learn more about contributing to this repository](CONTRIBUTING.md), [Code of Conduct](CODE_OF_CONDUCT.md)

### Contributors

Give the people some :heart: who are working on this project. See them all at:

https://github.com/jonhue/myg/graphs/contributors

### Semantic Versioning

Myg follows Semantic Versioning 2.0 as defined at http://semver.org.

## License

MIT License

Copyright (c) 2018 Jonas Hübotter

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
