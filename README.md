# compact-header

Small Vite workspace for iterating on the DET compact header while preserving a tokenized Squiz export.

## Purpose

This repository supports two related outputs:

- Local browser preview via the archived intranet snapshot in `DET intranet.html`
- Deployable tokenized Squiz header copied from `src/nester/header.html` to `dist/header.html`

The preview page is used to test look-and-feel and behavior quickly, while `dist/header.html` is the build artifact intended for CMS import.

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
  - Maintained header-specific behavior used during preview
- `DET intranet.html`
  - Local preview shell and archived page context
  - Includes the nester CSS/JS assets for development testing
- `header.html`
  - Legacy/alternate header snapshot in repo root
  - Not used by build scripts

## Current Header Baseline (Aug 2026)

The current compact-header implementation intentionally diverges from legacy defaults in `DET intranet_files/main.css`.

- Utility row
  - Background: `#343741`
  - Bottom border: `1px solid #506080`
  - Horizontal padding: `20px`
  - Online systems utility dropdown
    - Trigger interaction: click-to-toggle
    - Close behavior: outside click and Escape key
    - Current submenu items: eLearn, myBiz, SAMS, Education Directory, Schools Central
    - Dropdown top offset: `calc(100% + 2px)`
    - Dropdown border radius: `0`
    - Item hover/focus visuals: transparent background with text color `#2e979b` (matches `.ntgc-color--secondary-light`)
- Primary shell (`.container.header-wrapper.ntgc-header__primary-shell`)
  - Background: `#343642` (explicitly opaque on shell and immediate inner rows)
  - Uses `position: relative`, `z-index: 300`, and `isolation: isolate` so dropdown lightbox layers do not affect it
  - Carries the full-width bottom border (`1px solid #506080`)
- Logo and layout sizing
  - Primary/header width baseline: `1642px` in maintained header layout rules
  - Logo SVG width: `170px`
  - Search bar width: `246px`
- Intro section
  - Top margin: `40px`
  - Horizontal padding: `20px`
  - Non-header-wrapper container max width: `1642px`
- Main navigation dropdown (`.menu-wrapper`)
  - Width: `1232px`
  - Horizontally centered to viewport when opened (not centered to each level-one item)
  - Desktop top offset: `calc(100% + 14px)`
  - Lightbox pseudo-layer starts at panel top and extends downward only

### Important Implementation Note

Viewport-centered dropdown behavior is controlled by both:

- `src/nester/header.css` (desktop positioning rules)
- `src/nester/header.js` (`alignMainMenuPanelsToViewport` recalculates panel left offset on init/click/resize/load)

If either side is changed in isolation, dropdown centering or placement can regress.

## Expected Workflow

1. Edit `src/nester/header.html` for structural/header markup changes.
2. Edit `src/nester/header.css` and `src/nester/header.js` for style and behavior.
3. Validate in local preview using `npm run dev`.
4. Produce export with `npm run build`.
5. Confirm `dist/header.html` contains expected tokenized markup.

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

- Confirm `src/nester/header.js` still includes `alignMainMenuPanelsToViewport`
- Confirm that function is still called on init, menu click, resize, and load
- Confirm desktop `.menu-wrapper` rules in `src/nester/header.css` still use the maintained `1232px` width and active-state left/right overrides

Lightbox effect shades header areas above dropdowns:

- Confirm `.menu-wrapper:before` in `src/nester/header.css` starts at `top: 0` (panel top) and not negative offsets
- Confirm `.ntgc-header__primary-shell` keeps explicit background plus `position/z-index/isolation` overrides

Online systems utility dropdown does not open or close correctly:

- Confirm utility dropdown markup exists in both `src/nester/header.html` and `DET intranet.html`
- Confirm `src/nester/header.js` still initializes `initUtilityMenuDropdowns`
- Confirm submenu styles still target `.ntgc-navigation--utility__submenu` and open state still uses `.ntgc-utility-dropdown.is-open`

`dist/header.html` is missing or stale:

- Run `npm run build`
- Confirm `scripts/copy-squiz-header.mjs` exists
- Confirm the build script in `package.json` still runs `node scripts/copy-squiz-header.mjs`
- Confirm `src/nester/header.html` exists and contains the expected tokens

`npm run dev` fails after checkout:

- Run `npm install`
- Confirm Node.js version is compatible with Vite 5
