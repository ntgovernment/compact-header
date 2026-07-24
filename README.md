# compact-header

Small Vite-based workspace for iterating on a compact header implementation currently wired to the archived intranet snapshot in `DET intranet.html`.

## Requirements

- Node.js 18+ recommended
- npm

## Setup

Install dependencies:

```bash
npm install
```

## Development

Start the local dev server:

```bash
npm run dev
```

Current behavior:

- Vite opens `DET intranet.html`
- legacy page assets remain under `DET intranet_files/`
- new source work should be organized under `src/`

## Commands

```bash
npm run dev
npm run build
npm run preview
```

Command reference:

- `npm run dev`: starts Vite with host binding and opens the current HTML entry page
- `npm run build`: creates a production build
- `npm run preview`: serves the production build locally

## Project Structure

```text
.
|- DET intranet.html
|- DET intranet_files/
|- src/
|  |- css/
|  \- js/
|- package.json
\- prompts.md
```

Notes:

- `src/css/` is the intended home for maintained styles
- `src/js/` is the intended home for maintained JavaScript
- `DET intranet.html` and `DET intranet_files/` are ignored by Git to keep the repository focused on source changes

## Workflow Conventions

- Prefer making new changes in `src/` instead of editing copied legacy assets unless migration work specifically requires it
- Keep changes small and verify behavior through the Vite dev server before committing
- Update this README when scripts, entry points, or folder conventions change

## Troubleshooting

Dev server opens the wrong page:

- check the `dev` script in `package.json`
- confirm the entry path still matches `DET intranet.html`

Build output does not reflect source changes:

- confirm your change was made in the file actually loaded by the page
- if the page still references legacy files directly, migrate or update those references before expecting `src/` changes to appear

`npm run dev` fails after checkout:

- run `npm install`
- confirm your Node.js version is compatible with the installed Vite version