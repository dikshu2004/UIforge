# UIForge

UIForge is a custom JavaScript UI library inspired by Bootstrap.

The purpose of UIForge is to understand how modern UI libraries work internally and build a reusable UI library from scratch.

## About

UIForge provides reusable CSS utilities, responsive layouts, styling utilities, and JavaScript-rendered UI components that can be used to build web interfaces faster.

The project focuses on understanding the architecture behind a UI library rather than simply copying an existing framework.

## Tech Stack

- JavaScript
- HTML / CSS
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

## Structure

- `src/js/main.js` renders the UI showcase and component markup.
- `src/scss/main.scss` assembles the reusable CSS utilities, grid, and component styles.
- `index.html` provides the Vite entry page and application root element.
- `dist/` contains generated production output after `npm run build`.

The button, card, alert, badge, utility, and grid content is rendered with browser JavaScript while keeping the original class names and styling.

## Architecture

The showcase uses plain browser JavaScript to render reusable component markup into
the `#root` element. The stylesheet is plain CSS and keeps the reusable utility,
grid, and component class names used by the showcase.
- Sass maps
