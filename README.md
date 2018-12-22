<p align="center">
  <a href="https://codyhouse.co">
    <img src="https://codyhouse.co/avatar-sm.png" alt="CodyHouse logo" width=80 height=80>
  </a>
</p>


# CodyHouse's Framework
The CodyHouse's framework is a system of SCSS globals representing the base upon which you can build the style of your web project.

[Explore the documentation on codyhouse.co](https://codyhouse.co/ds/get-started).

The framework serves three main purposes:

1. **Template** - it provides you with a CSS template to speed up the first steps of setting up the style of a web project.
2. **Responsive** - it includes smart rules that take care of several responsiveness aspects.
3. **Design system** - it simplifies the process of creating the base of your design system.

The framework is composed of:

- **A collection of SCSS files** that compile into a _global.scss file. Make sure to import this style before your own;
- **A util.js file** with some utility functions that are used in the [CodyHouse components](https://codyhouse.co/ds/components). Make sure to import this before the component script file.


```text
codyhouse-framework/
└── main/
    ├── assets/
    │   ├── css/
    │   │   ├── globals/
    │   │   │   ├── _alignment.scss
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
    │   │   │   └── _z-index.scss
    │   │   ├── _globals.scss
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

If you are new to Gulp, take a look at this [beginners guide](https://css-tricks.com/gulp-for-beginners/).