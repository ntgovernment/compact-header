# Copilot Instructions

## Repository Intent

- This repository maintains the NTG Central compact header alongside an archived `DET intranet.html` preview shell
- Maintain a tokenized Squiz header source in `src/nester/header.html`
- Treat `DET intranet_files/` as legacy imported assets unless the task is explicitly about migrating or patching them
- Prefer placing maintained header code in `src/nester/` (currently active) and keep `src/js/` + `src/css/` for future generalized extraction

## Commands

- `npm install`
- `npm run dev`
- `npm run build`
- `npm run build:pages` (builds/restores local Pages output without publishing)
- `npm run preview`

## Editing Guidance

- Keep the current Vite entry page working unless the task explicitly changes the entry strategy
- Favor small, targeted changes over broad rewrites of copied intranet assets
- When moving behavior out of legacy files, preserve the existing page behavior first and migrate incrementally
- Reflect any script or structure changes in `README.md`

## Header Workflow Guidance

- `src/nester/header.html` is the source that gets copied to `dist/header.html` during `npm run build`
- `DET intranet.html` is the local preview shell and should continue loading `./src/nester/header.css` and `./src/nester/header.js`
- Root `header.html` may be useful for historical comparison, but is not currently part of the build pipeline
- Preserve Squiz placeholders (for example `%globals_site_url%`) in `src/nester/header.html`

## Current Header Guardrails

- Keep compact-header overrides in `src/nester/header.css` and behavior hooks in `src/nester/header.js`; do not reintroduce dependency on editing legacy `DET intranet_files/main.css` for maintained behavior.
- Preserve NTG Central branding colors, especially navy `#102040`; do not reintroduce archived charcoal/teal overrides.
- Keep the six approved utility labels and their NTG Central destinations synchronized with the Funnelback preview.
- Keep the Online systems dropdown accessible (`aria-expanded`) and close it on outside click and Escape.
- Keep the inline main-menu slot in the Squiz template and avoid installing a second main-menu click controller; shared site scripts own main-menu interactions.
- Keep closed `.menu-wrapper` panels hidden and active panels centered to the viewport.
- Preserve Squiz placeholders and verify existing asset IDs in the NTG Central target before CMS import.

## Validation

- For runtime changes, verify with `npm run dev` or `npm run build`
- For documentation-only changes, verify that commands and paths match the current repository state
- For header export changes, confirm `dist/header.html` is regenerated from `src/nester/header.html`
- For Pages asset restoration, use `npm run build:pages`; do not use the deploy command for validation.

## Git Conventions

- `node_modules/`, `DET intranet_files/`, and `DET intranet.html` are intentionally ignored
- Avoid committing generated output unless the task explicitly requires it