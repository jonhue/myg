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
* [Components](#components)
* [Themes](#themes)
* [To Do](#to-do)
* [Contributing](#contributing)
    * [Contributors](#contributors)
    * [Semantic Versioning](#semantic-versioning)
* [License](#license)

---

## Philosophy

...

---

## Usage

### Stylesheets

**Sass**

```sass
@import "myg/src/myg.sass"
```

**CSS3**

```css
@import "myg/dist/myg.min.css";
```

### Javascript

**ES6**

```js
import * as myg from 'myg/src/myg.js'
```

**ES5 (Sprockets)**

```js
//= require myg/dist/myg.js
```

...

---

## Components

* **[ActionButton](packages/action-button)**
* **[Animate](packages/animate)**
* **[Base](packages/base)**
* **[Button](packages/button)**
* **[Card](packages/card)**
* **[Checkbox](packages/checkbox)**
* **[Dialog](packages/dialog)**
* **[Drawer](packages/drawer)**
* **[Dropdown](packages/dropdown)**
* **[Elevation](packages/elevation)**
* **[Font](packages/font)**
* **[Footer](packages/footer)**
* **[FormField](packages/form-field)**
* **[Grid](packages/grid)**
* **[Hero](packages/hero)**
* **[Icon](packages/icon)**
* **[Input](packages/input)**
* **[Label](packages/label)**
* **[List](packages/list)**
* **[Menu](packages/menu)**
* **[Modal](packages/modal)**
* **[Progress](packages/progress)**
* **[Radio](packages/radio)**
* **[Select](packages/select)**
* **[Sidebar](packages/sidebar)**
* **[Slide](packages/slide)**
* **[Slider](packages/slider)**
* **[Spacing](packages/spacing)**
* **[Switch](packages/switch)**
* **[Tabs](packages/tabs)**
* **[Text](packages/text)**
* **[Theme](packages/theme)**
* **[Titlebar](packages/titlebar)**
* **[Toast](packages/toast)**
* **[Toolbar](packages/toolbar)**
* **[Tooltip](packages/tooltip)**

---

## Themes

...

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
