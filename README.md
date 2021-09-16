# 🐞 CodyFrame
A lightweight front-end framework for building accessible, bespoke interfaces.

[Documentation on codyhouse.co →](https://codyhouse.co/ds/get-started)

Files included:

1. **base/*:** essential CSS rules and utility classes (we suggest you don't modify these files).
2. **custom-style/*:** SCSS templates you can use to create your bespoke style.
3. **style.scss:** used to import the _base.scss and _custom-style.scss files.
4. **util.js:** utility functions used in the [CodyHouse components](https://codyhouse.co/ds/components). Make sure to import this file before the script file of the components.

Selling points:

- 🙌 No need to override existing CSS rules
- 🎨 CSS custom properties
- 📖 Easy to learn
- 🏗 A library of [accessible components](https://codyhouse.co/ds/components)

```text
codyhouse-framework/
└── main/
    ├── assets/
    │   ├── css/
    │   │   ├── base/*
    │   │   │── custom-style/
    │   │   │   ├── _buttons.scss
    │   │   │   ├── _colors.scss
    │   │   │   ├── _forms.scss
    │   │   │   ├── _icons.scss
    │   │   │   ├── _shared-styles.scss
    │   │   │   ├── _spacing.scss
    │   │   │   ├── _typography.scss
    │   │   │   └── _util.scss
    │   │   ├── _base.scss
    │   │   ├── _custom-style.scss
    │   │   ├── style-fallback.css
    │   │   ├── style.css
    │   │   └── style.scss
    │   └── js/
    │       └── util.js
    └── index.html
```

## Progressive enhancement
If you're using our [components](https://codyhouse.co/ds/components), make sure to include the following script in the `<head>` of your document:

```html
<script>document.getElementsByTagName("html")[0].className += " js";</script>
```

The script is used in CSS to check if JavaScript is enabled and apply additional style accordingly.

## Gulp
CodyFrame includes a Gulp configuration file. To start a project that runs on Gulp, navigate to the framework folder, and run the following two commands:

1) Install the node modules

```
npm install
```

2) Launch your project on a development server

```
npm run gulp watch
```

⚠️ **Note:** make sure you have [Npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm), [Node](https://nodejs.org/en/download/), and [Git](https://git-scm.com/) installed.

📝 [How to use CodyFrame with Webpack](https://codyhouse.co/ds/docs/framework#webpack)

## Component library

CodyHouse's components are accessible, progressively enhanced, HTML, CSS, JS components that work seamlessly with CodyFrame.

[Explore the components](https://codyhouse.co/ds/components)

## Global Editors

The Global Editors are visual tools that you can use to create the style of typography elements, color palettes, spacing rules, buttons, and forms. They generate SCSS code compatible with CodyFrame.

Explore the editors:

- **Colors** [codyhouse.co/ds/globals/colors](https://codyhouse.co/ds/globals/colors)
- **Typography** [codyhouse.co/ds/globals/typography](https://codyhouse.co/ds/globals/typography)
- **Spacing** [codyhouse.co/ds/globals/spacing](https://codyhouse.co/ds/globals/spacing)
- **Buttons** [codyhouse.co/ds/globals/buttons](https://codyhouse.co/ds/globals/buttons)
- **Forms** [codyhouse.co/ds/globals/forms](https://codyhouse.co/ds/globals/forms)
- **Shared styles** [codyhouse.co/ds/globals/shared-styles](https://codyhouse.co/ds/globals/shared-styles)

## Extensions

Browse our extensions for VSCode, Sublime Text and Atom:

[codyhouse.co/ds/docs/extensions](https://codyhouse.co/ds/docs/extensions)