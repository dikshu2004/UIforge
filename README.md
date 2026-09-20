# UIForge

A lightweight, modern, reusable UI component library and design system built with SCSS, Vanilla JavaScript, and Vite.

[![npm version](https://img.shields.io/npm/v/@diksha2004/uiforge.svg)](https://www.npmjs.com/package/@diksha2004/uiforge)

---

## Features

- **Design Tokens**: Centralized SCSS variables for colors, typography, spacing, border radii, and motion.
- **10 Core Components**: Buttons, Badges, Cards, Alerts, Avatars, Navbar, Forms & Validation, Dropdowns, Tabs, and Pagination.
- **12-Column Responsive Grid**: Flexbox-based container, row, and responsive column classes (`col-*`, `col-md-*`, etc.).
- **CSS Utilities**: Fast layout and spacing helpers for margins, paddings, display, flexbox, alignment, and typography.
- **Dark Mode Ready**: Built with CSS custom properties (`--uf-*`) supporting smooth light/dark theme switching.
- **Zero Heavy Frameworks**: Pure HTML, SCSS, and Vanilla JavaScript with no external runtime dependencies.

---

## Quick Start

### 1. Using via CDN (HTML)
Add the stylesheet directly inside your `<head>` tag:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@diksha2004/uiforge@1.0.0/dist/uiforge.css">
```

### 2. Install via npm
```bash
npm install @diksha2004/uiforge
```

Import the CSS into your JavaScript/CSS entry file (e.g., Vite, Next.js, or Webpack):
```javascript
import "@diksha2004/uiforge/dist/uiforge.css";
```

---

## Example Usage

```html
<!-- Primary Button -->
<button class="btn btn-primary">Click Me</button>

<!-- Responsive Card -->
<div class="card">
  <div class="card-body">
    <span class="card-tag">NEW</span>
    <h3>Component Card</h3>
    <p>Build interfaces faster with UIForge reusable classes.</p>
  </div>
</div>



## Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/dikshu2004/UIforge.git
   cd UIforge
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Vite development server:
   ```bash
   npm run dev
   ```

4. Build both the documentation and the standalone library CSS (`dist/uiforge.css`):
   ```bash
   npm run build
   ```

5. Preview the production build:
   ```bash
   npm run preview
   ```

---

## Author

**Diksha** — [@dikshu2004](https://github.com/dikshu2004)

---


