# 🐞 CodyHouse Framework
A lightweight front-end framework for building accessible, bespoke interfaces.

[Explore the documentation on codyhouse.co →](https://codyhouse.co/ds/get-started)

The framework is composed of:

1. **_base.scss:** essential CSS rules and utility classes.
2. **_custom-style.scss:** a CSS template to create your bespoke style (e.g., buttons, forms, and colors).
3. **util.js:** the utility functions used in the [CodyHouse Components](https://codyhouse.co/ds/components). Make sure to import this file before the component script file.

Some of the advantages of working with this framework:

- lightweight (8KB minified and gzipped)
- no need to override existing CSS rules
- mobile-first
- create unique designs with total control
- easy to learn
- beautiful [component library](https://codyhouse.co/ds/components)

```text
codyhouse-framework/
└── main/
    ├── assets/
    │   ├── css/
    │   │   ├── base/
    │   │   │   ├── _accessibility.scss
    │   │   │   ├── _breakpoints.scss
    │   │   │   ├── _buttons.scss
    │   │   │   ├── _colors.scss
    │   │   │   ├── _forms.scss
    │   │   │   ├── _grid-layout.scss
    │   │   │   ├── _icons.scss
    │   │   │   ├── _mixins.scss
    │   │   │   ├── _reset.scss
    │   │   │   ├── _shared-styles.scss
    │   │   │   ├── _spacing.scss
    │   │   │   ├── _typography.scss
    │   │   │   ├── _util.scss
    │   │   │   ├── _visibility.scss
    │   │   │   └── _z-index.scss
    │   │   │── custom-style/
    │   │   │   ├── _buttons.scss
    │   │   │   ├── _colors.scss
    │   │   │   ├── _forms.scss
    │   │   │   ├── _shared-styles.scss
    │   │   │   ├── _spacing.scss
    │   │   │   └── _typography.scss
    │   │   ├── _base.scss
    │   │   ├── _custom-style.scss
    │   │   ├── style.css
    │   │   └── style.scss
    │   └── js/
    │       └── util.js
    └── index.html
```

## Progressive enhancement
The Framework and the Components are built following the principle of progressive enhancement. Please make sure to include the following script in the `<head>` of your document:

```html
<script>document.getElementsByTagName("html")[0].className += " js";</script>
```

The script is used in CSS to target that Javascript is enabled and apply additional style accordingly. If you don't include the script, part of the style of the components won't be visible.

## Gulp
The framework includes a Gulp file with some basic configurations needed to run a web project based on the framework.

To use this Gulp configuration file, once you have downloaded the framework, make sure to run the following commands in your command line:

```
npm install
npm run gulp watch
```

The first command will install the modules the framework requires for compiling SCSS into CSS; the second will launch your project on a development server.

## Component Library

CodyHouse's Components are accessible, progressively enhanced, HTML, CSS, JS components that work seamlessly with the framework.

[Explore the Components →](https://codyhouse.co/ds/components)

## Global Editors

The Global Editors are web design tools that allow you to set the style of typography elements, color themes, spacing rules, buttons, and forms directly in the browser. They generate SCSS code that is compatible with the Framework.

Explore the Editors:

- **Colors** [codyhouse.co/ds/globals/colors](https://codyhouse.co/ds/globals/colors)
- **Typography** [codyhouse.co/ds/globals/typography](https://codyhouse.co/ds/globals/typography)
- **Spacing** [codyhouse.co/ds/globals/spacing](https://codyhouse.co/ds/globals/spacing)
- **Buttons** [codyhouse.co/ds/globals/buttons](https://codyhouse.co/ds/globals/buttons)
- **Forms** [codyhouse.co/ds/globals/forms](https://codyhouse.co/ds/globals/forms)