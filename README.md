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

`dist/header.html` is missing or stale:

- Run `npm run build`
- Confirm `scripts/copy-squiz-header.mjs` exists
- Confirm the build script in `package.json` still runs `node scripts/copy-squiz-header.mjs`
- Confirm `src/nester/header.html` exists and contains the expected tokens

`npm run dev` fails after checkout:

- Run `npm install`
- Confirm Node.js version is compatible with Vite 5