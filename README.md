# compact-header

A small static-site project for the DET intranet compact header prototype. The repository stores a captured HTML page and its local asset bundle so it can be served and iterated on locally without depending on the original remote site.

## Project overview

- The main entry point is [DET intranet.html](DET%20intranet.html).
- Static dependencies live in [DET intranet_files](DET%20intranet_files/).
- The project is served locally with Vite for browser reloading and quick iteration.
- The local version intentionally resolves asset paths without the original `.download` suffixes, because the exported files were saved from the remote site with that appended name.

## Prerequisites

- Node.js 18+
- npm

## Local development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

The app is available at:

- http://localhost:5173/
- http://localhost:5173/DET%20intranet.html

Vite is configured with HMR enabled so edits to the HTML, CSS, and JS assets update in the browser automatically.

## Build and preview

Create a production build:

```bash
npm run build
```

Preview the built output:

```bash
npm run preview
```

## Repository structure

```text
.
├── DET intranet.html
├── DET intranet_files/
│   ├── all.css
│   ├── audits.js
│   ├── components.js
│   ├── global-v2.js
│   ├── jquery-3.4.1.min.js
│   ├── main.css
│   ├── status-toolbar.js
│   └── ...
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
├── README.md
└── LICENSE
```

## Important implementation notes

- Keep the asset folder name as `DET intranet_files` unless you also update every reference in the HTML.
- When files were exported with the `.download` suffix, rename them and update the corresponding `src` and `href` values in the HTML.
- If you use a Font Awesome kit, include it early in the head, for example:

```html
<script src="https://kit.fontawesome.com/9bf658a5c7.js" crossorigin="anonymous"></script>
```

- The HTML file is a static snapshot; it is not a framework app. Prefer minimal changes and preserve the original layout when possible.

## Guidance for coding agents

- Make the smallest change that solves the issue.
- Prefer relative paths from the HTML page to files in the sibling `DET intranet_files` directory.
- If you rename a static asset, update all references in the HTML to match exactly.
- Do not add framework-specific build tooling unless the user explicitly asks for it.
- Keep commits focused: asset cleanup, local serving, styling fixes, and content changes should be separate where possible.

## Common commands

```bash
npm install
npm run dev
npm run build
npm run preview
```
