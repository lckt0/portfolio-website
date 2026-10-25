# Portfolio Website

A static, responsive portfolio (HTML, CSS, JavaScript) for the Coursera project "Using Microsoft Copilot for Writing HTML, CSS, and JavaScript". Deploy with GitHub Pages (main branch, root folder).

## Requirements
- **HTML structure** – `index.html`: header, nav, main with About/Projects/Contact sections, footer, semantic elements.
- **Accessibility** – `alt` text on every image, `lang` attribute, labels for form fields, skip link, ARIA attributes (`aria-expanded`, `aria-pressed`, `role="alert"`), visible focus styles.
- **CSS styling** – `styles.css`: shared theme via CSS variables, cards, buttons, light/dark themes.
- **JavaScript interactivity** – `script.js`: mobile menu, dark-mode toggle (saved in localStorage), project filter, contact form validation.
- **Responsive** – media queries in `styles.css` (3 → 2 → 1 card columns, collapsible menu under 600px), viewport meta tag, fluid images.

## Run
Open `index.html` in a browser, or run `python3 -m http.server` in this folder. There is no build step and there are no tests.
