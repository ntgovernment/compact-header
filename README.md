# compact-header

Vite workspace for the NTG Central compact header, with a local preview shell and a tokenized Squiz export.

## Purpose

This repository supports two related outputs:

- Local browser preview via the archived intranet snapshot in `DET intranet.html`
- Deployable tokenized Squiz header copied from `src/nester/header.html` to `dist/header.html`

The archived preview is useful for checking shared design-system behavior, while `dist/header.html` is the CMS import artifact.

## Requirements

- Node.js 18+
- npm

## Setup

```bash
npm install
```

## Command Reference

```bash
npm run dev
npm run build
npm run build:pages
npm run deploy:pages
npm run preview
```

- `npm run dev`
  - Runs Vite with host binding
  - Opens `/DET%20intranet.html`
  - Uses `DET intranet.html` as the active development page
- `npm run build`
  - Builds `DET intranet.html` with Vite
  - Runs `scripts/copy-squiz-header.mjs`
  - Copies `src/nester/header.html` to `dist/header.html` unchanged
- `npm run preview`
  - Serves the built output from `dist/`
- `npm run build:pages`
  - Builds with a GitHub Pages-compatible base path
  - Auto-detects repo name from `origin` and sets base as `/<repo>/`
  - Copies preview assets, header sources, and webfonts into `dist/`
  - Writes `dist/.nojekyll`
- `npm run deploy:pages`
  - Runs the GitHub Pages build flow
  - Publishes `dist/` to the `gh-pages` branch using `gh-pages`

### GitHub Pages Utility

The deployment utility is implemented in `scripts/deploy-github-pages.mjs`.

Supported environment overrides:

- `GITHUB_PAGES_REPO`
  - Forces the repository segment used for base path detection.
- `GITHUB_PAGES_BASE`
  - Forces the Vite base path for pages builds (for example `/compact-header/`).

Examples:

```bash
npm run build:pages
npm run deploy:pages
GITHUB_PAGES_BASE=/compact-header/ npm run deploy:pages
```

## Project Structure

```text
.
|- DET intranet.html
|- DET intranet_files/
|- header.html
|- scripts/
|  \- copy-squiz-header.mjs
|- src/
|  |- css/
|  |- js/
|  \- nester/
|     |- header.css
|     |- header.html
|     \- header.js
|- package.json
|- vite.config.js
\- copilot-instructions.md
```

## Source Of Truth

- `src/nester/header.html`
  - Tokenized Squiz-compatible header markup
  - Includes placeholders like `%globals_site_url%`
  - Build source for `dist/header.html`
- `src/nester/header.css`
  - Maintained header-specific styles (utility row, nav row, responsive behavior)
- `src/nester/header.js`
  - Places the shared main menu in the header slot, removes duplicate utility links, aligns panels, and controls the utility dropdown
- `DET intranet.html`
  - Local preview shell and archived page context
  - Includes the nester CSS/JS assets for development testing
- `header.html`
  - Legacy/alternate header snapshot in repo root
  - Not used by build scripts

## Current Header Baseline

The maintained template is branded for NTG Central and uses the established NTG palette, including primary navy `#102040`; do not copy the archived preview's charcoal/teal overrides.

- Utility links: NTG Directory, NTG Policy Library, MyHR, MyForms, Noticeboard, and Online systems.
- MyForms destination: `https://myforms.nt.gov.au/`.
- Online systems currently links to `https://ntgcentral.nt.gov.au/online-systems`.
- The utility dropdown toggles on click, closes on outside click or Escape, and keeps `aria-expanded` synchronized.
- `data-mainmenu-inline-slot="true"` marks the shared-menu insertion point. The header script places the menu, removes duplicate utility links, aligns panels, and controls only the utility dropdown; shared site scripts own main-menu interactions.
- Keep Squiz placeholders in `src/nester/header.html`. Existing asset IDs may be installation-specific and must be checked against NTG Central before CMS import.

## Expected Workflow

1. Edit `src/nester/header.html` for structural/header markup changes.
2. Edit `src/nester/header.css` and `src/nester/header.js` for style and behavior.
3. Validate the preview using `npm run dev` at desktop and mobile widths.
4. Run `npm run build` to regenerate `dist/header.html`; use `npm run build:pages` to regenerate the complete local Pages output without publishing.
5. Confirm the export contains the expected labels, destinations, and Squiz tokens. Verify token and asset IDs in the target CMS before import.

## Conventions

- Prefer maintained source under `src/nester/` for header work.
- Treat `DET intranet_files/` as imported legacy assets unless migration work explicitly requires editing them.
- Keep changes scoped and behavior-preserving when touching legacy snapshot code.
- Update docs whenever scripts, entry points, or source-of-truth files change.

## Troubleshooting

Dev server opens the wrong page:

- Confirm the `dev` script in `package.json` still uses `--open /DET%20intranet.html`
- Confirm Vite input in `vite.config.js` still points to `DET intranet.html`

Header changes do not appear in preview:

- Verify `DET intranet.html` is loading `./src/nester/header.css` and `./src/nester/header.js`
- Verify your edits were made in `src/nester/` files, not only in root `header.html`

Dropdown panels are no longer centered to the screen:

- Confirm `src/nester/header.js` calls `alignMainMenuPanels` on initialization and resize
- Confirm the active-state visibility and centering rules in `src/nester/header.css` remain in sync

Lightbox effect shades header areas above dropdowns:

- Confirm `.menu-wrapper:before` in `src/nester/header.css` starts at `top: 0` (panel top) and not negative offsets
- Confirm `.ntgc-header__primary-shell` keeps explicit background plus `position/z-index/isolation` overrides

Online systems utility dropdown does not open or close correctly:

- Confirm utility dropdown markup exists in both `src/nester/header.html` and `DET intranet.html`
- Confirm `src/nester/header.js` still initializes `initUtilityDropdowns`
- Confirm submenu styles still target `.ntgc-navigation--utility__submenu` and open state still uses `.ntgc-utility-dropdown.is-open`

`dist/header.html` is missing or stale:

- Run `npm run build`
- Confirm `scripts/copy-squiz-header.mjs` exists
- Confirm the build script in `package.json` still runs `node scripts/copy-squiz-header.mjs`
- Confirm `src/nester/header.html` exists and contains the expected tokens

`npm run dev` fails after checkout:

- Run `npm install`
- Confirm Node.js version is compatible with Vite 5
