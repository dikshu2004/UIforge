# UIForge

UIForge is a custom React UI library inspired by Bootstrap.

The purpose of UIForge is to understand how modern UI libraries work internally and build a reusable UI library from scratch.

## About

UIForge provides reusable SCSS utilities, responsive layouts, styling utilities, and React-rendered UI components that can be used to build web interfaces faster.

The project focuses on understanding the architecture behind a UI library rather than simply copying an existing framework.

## Tech Stack

- React
- JSX
- SCSS / Sass
- JavaScript
- Vite
- npm

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## React Structure

- `src/js/App.jsx` contains the UI showcase and component markup.
- `src/js/main.jsx` mounts the React app into the `#root` element.
- `src/scss/` contains the reusable Sass variables, utilities, grid, and component styles.
- `index.html` provides the Vite entry page and React root element.
- `dist/` contains generated production output after `npm run build`.

The existing button, card, alert, badge, utility, and grid content is rendered by React while keeping the original class names and SCSS styling.

## Architecture

UIForge uses Sass features such as:

- Sass variables
- Sass maps
- `@each` loops
- Mixins
- Interpolation
- Sass modules with `@use`

These features are used to create reusable and scalable utility classes from centralized configuration.

For example, color utilities can be generated from a single Sass color map:

```scss
@each $key, $value in variables.$colors {
  .text-#{$key} {
    color: $value;
  }
}
