# Myg

![NPM Version](https://img.shields.io/npm/v/myg.svg)
<img src="https://travis-ci.org/jonhue/myg.js.svg?branch=master" />

An opinionated & adaptive state-of-the-web framework.

**Disclaimer:** Myg really is a state-of-the-web framework. It utilizes CSS variables, CSS grid and ES6. Better be aware before throwing it around.

---

## Table of Contents

* [Philosophy](#philosophy)
* [Usage](#usage)
    * [Stylesheets](#stylesheets)
    * [Javascript](#javascript)
* [Components](#components)
    * [Base](#base)
    * [Layout](#layout)
    * [Form](#form)
    * [Text](#text)
    * [Theme](#theme)
    * [...](#...)
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

```sass
@import "myg/src/myg.sass"
```

### Javascript

**ES6**

```js
import * as myg from 'myg/src/myg.js'
```

...

---

## Components

### Base

* **[Base](packages/base)**
* **[Grid](packages/grid)**

### Layout

* **[Layout](packages/layout)**
* **[(Call To) Action](packages/layout/action)**
* **[Drawer](packages/layout/drawer)**
* **[Footer](packages/layout/footer)**
* **[Header](packages/layout/header)**
* **[Menu](packages/layout/menu)**
* **[Sidebar](packages/layout/sidebar)**
* **[Titlebar](packages/layout/titlebar)**
* **[Toolbar](packages/layout/toolbar)**

### Form

* **[Form](packages/form)**
* **[Button](packages/form/button)**
* **[Checkbox](packages/form/checkbox)**
* **[(Form) Field](packages/form/field)**
* **[Input](packages/form/input)**
* **[Label](packages/form/label)**
* **[Radio](packages/form/radio)**
* **[Select](packages/form/select)**
* **[Slider](packages/form/slider)**
* **[Switch](packages/form/switch)**

### Text

* **[Text](packages/text)**
* **[Heading](packages/text/heading)**
* **[Link](packages/text/link)**
* **[Paragraph](packages/text/paragraph)**

### Theme

* **[Theme](packages/theme)**
* **[Typography](packages/theme/typography)**

### ...

* **[Animate](packages/animate)**
* **[Card](packages/card)**
* **[Dialog](packages/dialog)**
* **[Dropdown](packages/dropdown)**
* **[Elevation](packages/elevation)**
* **[Icon](packages/icon)**
* **[List](packages/list)**
* **[Modal](packages/modal)**
* **[Progress](packages/progress)**
* **[Selector](packages/selector)**
* **[Slide](packages/slide)**
* **[Spacing](packages/spacing)**
* **[Tabs](packages/tabs)**
* **[Toast](packages/toast)**
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
