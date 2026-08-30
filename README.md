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

Compile modular SCSS stylesheets:

```bash
npm run build:css
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

Compile CSS and create a production build:

```bash
npm run build:css
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
│   ├── auds.js
│   ├── components.js
│   ├── global-v2.js
│   ├── jquery-3.4.1.min.js
│   ├── main.css
│   ├── status-toolbar.js
│   └── ...
├── src/
│   └── styles/
│       ├── main.scss                                      # Master SCSS parse file replicate
│       ├── compact-header.scss                             # Local compact header prototype override
│       ├── compiled-main.css                              # Compiled stylesheet referenced by HTML
│       ├── SQUIZ_MATRIX_ASSET_MAPPING.md                  # Squiz Matrix Asset ID to file mapping
│       ├── [846097] - CSS/                                # Agency project specific assets
│       │   ├── [846098] - main.scss
│       │   ├── custom-header-overrides.scss
│       │   └── [846100] - base/
│       ├── [407329] - CSS/                                # Agency shared custom styles
│       ├── [264304] - base/                               # Design system base utilities
│       ├── [305442] - Base/                               # AUDS & Bootstrap base
│       ├── [264064] - AUDS/                               # AU Design System modules
│       └── [264175] - Components/                         # NTG component overrides
├── scripts/
│   └── compile-css.js                                     # SCSS compilation build script
├── index.html
├── package.json
├── vite.config.js
├── .gitignore
├── README.md
└── LICENSE
```

## Modular SCSS & Squiz Matrix Overrides

The stylesheet is broken down into modular SCSS/CSS partials matching the Squiz Matrix asset tree:

- **Targeted overrides**: Add an editable custom override after the mirrored component imports. Do not edit the read-only Matrix mirrors directly.
- **Compile output**: Run `npm run build:css` to generate both `src/styles/compiled-main.css` and `DET intranet_files/main.css`.
- **Deploying to Matrix**: Refer to [src/styles/SQUIZ_MATRIX_ASSET_MAPPING.md](src/styles/SQUIZ_MATRIX_ASSET_MAPPING.md) to copy the exact modified file contents directly into the matching asset ID in Squiz Matrix.

### Read-only source folders

The following folders are direct mirrors of existing Squiz Matrix assets and are marked read-only in the editor (`.vscode/settings.json` → `files.readonlyInclude`):

- `src/styles/[264064] - AUDS/`
- `src/styles/[264175] - Components/`
- `src/styles/[264304] - base/`
- `src/styles/[305442] - Base/`
- `src/styles/[407329] - CSS/`
- `src/styles/[846097] - CSS/`

Do not edit files inside them directly. To change behavior sourced from one of these files:

1. Create a new custom override `.scss` file as a new asset in Squiz Matrix (following the existing custom-file convention, e.g. `[264312] - custom.scss` or `[846105] - custom.scss`).
2. Once the asset is created in Matrix, add or update the corresponding `@import` in [`src/styles/main.scss`](src/styles/main.scss) to reference the new `[assetID] - name.scss` file.
3. Update [`src/styles/SQUIZ_MATRIX_ASSET_MAPPING.md`](src/styles/SQUIZ_MATRIX_ASSET_MAPPING.md) with the new asset ID and description.

### Compact header prototype

The local fixture implements a compact two-band header:

- `.ntgc-header__utility-band` contains the secondary navigation.
- `.ntgc-header__navigation-band` contains the logo, main menu, search, and profile panel.
- `.ntgc-header__inner--utility`, `--main`, and `--profile` identify each header layer without positional selectors.

The bands own the full-width charcoal background and divider lines; their inner `.container` elements retain the page alignment. [`src/styles/compact-header.scss`](src/styles/compact-header.scss) is imported last and provides the desktop-only layout, logo/menu contrast, widened menu space, and the rule that hides the secondary-nav mobile accordion copy at `769px` and above. It also fixes the two-band split's header z-index stacking, pins the mega-menu flyout flush below the navigation band, and reworks its open/close animation to grow downward instead of sliding through the bars — see [src/styles/SQUIZ_MATRIX_ASSET_MAPPING.md](src/styles/SQUIZ_MATRIX_ASSET_MAPPING.md) for the full breakdown.

Before deploying, create `compact-header.scss` as a new editable Matrix CSS asset, replace its local import in [`src/styles/main.scss`](src/styles/main.scss) with the Matrix asset path, and apply the matching band/modifier markup to header nester `#989753`. Keep the secondary-nav accordion markup: it is hidden on desktop but used by the mobile navigation cloning script.

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
npm run build:css
npm run dev
npm run build
npm run preview
```
