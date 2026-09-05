# UIForge

UIForge is a custom CSS and JavaScript UI library inspired by Bootstrap.

The purpose of UIForge is to understand how modern UI libraries work internally and build a reusable UI library from scratch.

## About

UIForge provides reusable CSS utilities, responsive layouts, styling utilities, and UI components that can be used to build web interfaces faster.

The project focuses on understanding the architecture behind a UI library rather than simply copying an existing framework.

## Tech Stack

- HTML
- SCSS / Sass
- JavaScript
- Vite
- npm

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
