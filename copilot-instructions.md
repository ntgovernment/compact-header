# Copilot Instructions

## Repository Intent

- This repository is a compact header workspace around `DET intranet.html`
- Maintain a tokenized Squiz header source in `src/nester/header.html`
- Treat `DET intranet_files/` as legacy imported assets unless the task is explicitly about migrating or patching them
- Prefer placing maintained header code in `src/nester/` (currently active) and keep `src/js/` + `src/css/` for future generalized extraction

## Commands

- `npm install`
- `npm run dev`
- `npm run build`
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
- Keep dropdown panels (`.menu-wrapper`) centered to the viewport (screen center), not to each level-one menu item.
- Preserve the JS-based panel alignment function (`alignMainMenuPanelsToViewport`) and its init/click/resize/load hooks when editing menu behavior.
- Keep dropdown panel width at `1232px` unless a task explicitly requests a change.
- Keep utility row and primary-shell visual baseline unless explicitly changed by task:
	- Utility: `#343741` with `1px solid #506080` bottom border and `20px` horizontal padding.
	- Primary shell: opaque `#343642`, full-width border, and stacking isolation (`position: relative`, `z-index`, `isolation`) to avoid lightbox bleed.
- Keep lightbox pseudo-layer behavior constrained so it starts at the top of `.menu-wrapper` and extends downward only.

## Validation

- For runtime changes, verify with `npm run dev` or `npm run build`
- For documentation-only changes, verify that commands and paths match the current repository state
- For header export changes, confirm `dist/header.html` is regenerated from `src/nester/header.html`

## Git Conventions

- `node_modules/`, `DET intranet_files/`, and `DET intranet.html` are intentionally ignored
- Avoid committing generated output unless the task explicitly requires it