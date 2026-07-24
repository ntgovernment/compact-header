# Copilot Instructions

## Repository Intent

- This repository is a compact header workspace around `DET intranet.html`
- Treat `DET intranet_files/` as legacy imported assets unless the task is explicitly about migrating or patching them
- Prefer placing maintained code in `src/js/` and `src/css/`

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

## Validation

- For runtime changes, verify with `npm run dev` or `npm run build`
- For documentation-only changes, verify that commands and paths match the current repository state

## Git Conventions

- `node_modules/`, `DET intranet_files/`, and `DET intranet.html` are intentionally ignored
- Avoid committing generated output unless the task explicitly requires it