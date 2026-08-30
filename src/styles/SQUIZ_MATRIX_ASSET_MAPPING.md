# Squiz Matrix Modular Asset Mapping

This directory structure recreates the individual modular stylesheets from Squiz Matrix so you can surgically pinpoint edits to individual files and upload overrides back to Matrix individually.

> **Read-only folders**: `[264064] - AUDS`, `[264175] - Components`, `[264304] - base`, `[305442] - Base`, `[407329] - CSS`, and `[846097] - CSS` are marked read-only in the editor. To change behavior from a file in these folders, create a new custom override asset in Squiz Matrix, then update the `@import` in `main.scss` to point to it once the asset ID is known.

---

## Master Entry Point & Compiled Output

- **Master SCSS Entry Point**: [`src/styles/main.scss`](./main.scss) *(Replicates the Squiz Matrix parse file)*
- **Matrix Root Copy**: [`src/styles/[846097] - CSS/[846098] - main.scss`](./%5B846097%5D%20-%20CSS/%5B846098%5D%20-%20main.scss)
- **Local Compiled CSS**: [`src/styles/compiled-main.css`](./compiled-main.css)

---

## Directory & Asset Breakdown

### 1. `[846097] - CSS` / `[846100] - base` (Agency Project Base)
| Asset ID | File Path | Description |
|---|---|---|
| `846098` | `[846097] - CSS/[846098] - main.scss` | Master Squiz Matrix parsed stylesheet entry point |
| `846107` | `[846097] - CSS/[846100] - base/[846107] - svgs-agency.scss` | Agency SVGs & base header graphic definitions |
| `846102` | `[846097] - CSS/[846100] - base/[846102] - variables.scss` | Design system core variables, type scale & spacing |
| `846103` | `[846097] - CSS/[846100] - base/[846103] - colours.scss` | NTG brand colours, background and text palettes |
| `846104` | `[846097] - CSS/[846100] - base/[846104] - mixins.scss` | AUDS mixins (replace, svguri, math, luminance, focus) |
| `846105` | `[846097] - CSS/[846100] - base/[846105] - custom.scss` | Agency project specific overrides (document search, onboarding) |
| `989747` | `[846097] - CSS/[846100] - base/[989747] - secondary-navigation.css` | Secondary navigation dropdowns & sub-menus |
| `inline` | `[846097] - CSS/custom-header-overrides.scss` | Inline custom header rules from parse file |

---

### 2. `[407329] - CSS` (Agency Shared Custom)
| Asset ID | File Path | Description |
|---|---|---|
| `264312` | `[407329] - CSS/[264312] - custom.scss` | Custom base resets, body typography & grid defaults |
| `392760` | `[407329] - CSS/[392760] - custom-agency-intranet.scss` | Custom agency intranet styles (landing-header, etc.) |

---

### 3. `[264304] - base` (Core Base Utilities)
| Asset ID | File Path | Description |
|---|---|---|
| `264309` | `[264304] - base/[264309] - utils.scss` | Global utility classes (`w-*`, `h-*`, `flex`, `float`, `display`) |

---

### 4. `[305442] - Base` (AUDS & Bootstrap Base)
| Asset ID | File Path | Description |
|---|---|---|
| `264213` | `[305442] - Base/[264213] - bootstrap-spacing.scss` | Bootstrap Grid v4.1.3 spacing utilities (`m-*`, `p-*`) |
| `313423` | `[305442] - Base/[313423] - bootstrap-custom.scss` | NTGC padding/margin scales, responsive ordering & file icons |
| `400319` | `[305442] - Base/[400319] - print.scss` | Print media stylesheet |

---

### 5. `[264064] - AUDS` (Australian Design System Core Modules)
| Asset ID | File Path | Description |
|---|---|---|
| `264069` | `[264064] - AUDS/[264069] - accordions-module.scss` | AUDS Accordion v7.0.8 |
| `264077` | `[264064] - AUDS/[264077] - breadcrumbs-module.scss` | AUDS Breadcrumbs v3.0.5 |
| `264085` | `[264064] - AUDS/[264085] - callout-module.scss` | AUDS Callout v3.0.2 |
| `264089` | `[264064] - AUDS/[264089] - card-module.scss` | AUDS Card v0.3.2 |
| `264093` | `[264064] - AUDS/[264093] - control-input-module.scss` | AUDS Control Input v3.0.1 |
| `264097` | `[264064] - AUDS/[264097] - cta-module.scss` | AUDS CTA Link v2.2.0 |
| `264101` | `[264064] - AUDS/[264101] - direction-links-module.scss` | AUDS Direction Links v3.0.0 |
| `264105` | `[264064] - AUDS/[264105] - footer-module.scss` | AUDS Footer v3.0.5 |
| `264113` | `[264064] - AUDS/[264113] - grid-12-module.scss` | AUDS 12-Column Grid v2.1.0 |
| `264121` | `[264064] - AUDS/[264121] - headings-module.scss` | AUDS Headings v2.0.11 |
| `264125` | `[264064] - AUDS/[264125] - inpage-nav-module.scss` | AUDS Inpage Nav v3.0.6 |
| `264129` | `[264064] - AUDS/[264129] - keyword-list-module.scss` | AUDS Keyword List v3.0.5 |
| `264133` | `[264064] - AUDS/[264133] - link-list-module.scss` | AUDS Link List v3.0.8 |
| `264141` | `[264064] - AUDS/[264141] - page-alerts-module.scss` | AUDS Page Alerts v2.1.3 |
| `264149` | `[264064] - AUDS/[264149] - responsive-media-module.scss` | AUDS Responsive Media v2.0.14 |
| `264153` | `[264064] - AUDS/[264153] - select-module.scss` | AUDS Select v2.0.11 |
| `264157` | `[264064] - AUDS/[264157] - side-nav-module.scss` | AUDS Side Nav v5.0.7 |
| `264161` | `[264064] - AUDS/[264161] - skip-links-module.scss` | AUDS Skip Links v2.0.16 |
| `264173` | `[264064] - AUDS/[264173] - text-inputs-module.scss` | AUDS Text Inputs v2.1.2 |

---

### 6. `[264175] - Components` (NTG Component Overrides)
| Asset ID | File Path | Description |
|---|---|---|
| `264176` | `[264175] - Components/[264176] - accordions.scss` | NTG Accordion overrides |
| `264177` | `[264175] - Components/[264177] - animate.scss` | NTG Animations (fadein) |
| `303580` | `[264175] - Components/[303580] - avatar.scss` | NTG Avatar sizes and user info |
| `264178` | `[264175] - Components/[264178] - badges.scss` | NTG Badge component styles |
| `264179` | `[264175] - Components/[264179] - banners.scss` | NTG Dynamic banner & carousel banner styles |
| `264180` | `[264175] - Components/[264180] - body.scss` | NTG Body typography, list styles & blockquotes |
| `264181` | `[264175] - Components/[264181] - breadcrumbs.scss` | NTG Breadcrumbs component overrides |
| `264182` | `[264175] - Components/[264182] - buttons.scss` | NTG Button styles, variants & hover interactions |
| `264183` | `[264175] - Components/[264183] - callout.scss` | NTG Callout component overrides |
| `264184` | `[264175] - Components/[264184] - call-to-action.scss` | NTG CTA link overrides |
| `304051` | `[264175] - Components/[304051] - cards.scss` | NTG Card component overrides, masonry grid, mini cards |
| `264186` | `[264175] - Components/[264186] - carousel.scss` | NTG Carousel image overrides |
| `264187` | `[264175] - Components/[264187] - control-input.scss` | NTG Radio and checkbox input controls |
| `409203` | `[264175] - Components/[409203] - contacts.scss` | NTG Contacts list, blocks & persons pattern styles |
| `315132` | `[264175] - Components/[315132] - contacts-grid.scss` | NTG Phone directory contacts search, results & favourites |
| `303820` | `[264175] - Components/[303820] - counter.scss` | NTG Counter badge styles |
| `264188` | `[264175] - Components/[264188] - direction-links.scss` | NTG Back-to-top and floating feedback buttons |
| `311031` | `[264175] - Components/[311031] - decision-tree.scss` | NTG Decision Tree wizard styles & form questions |
| `421923` | `[264175] - Components/[421923] - document-list.scss` | NTG Document list component |
| `264189` | `[264175] - Components/[264189] - fancybox.scss` | NTG Fancybox lightbox overrides |
| `306408` | `[264175] - Components/[306408] - featured-content.scss` | NTG Featured content blocks, responsive hero cards & credits |
| `313424` | `[264175] - Components/[313424] - filter-popup.scss` | NTG Filter popup modal component |
| `264302` | `[264175] - Components/[264302] - footer.scss` | NTG Footer navigation and layout |
| `264190` | `[264175] - Components/[264190] - form.scss` | NTG Form question, field, and file upload styles |
| `303430` | `[264175] - Components/[303430] - form-alerts.scss` | NTG Form alerts & validation message styles |
| `311698` | `[264175] - Components/[311698] - google-map.scss` | NTG Embedded map styles |
| `264196` | `[264175] - Components/[264196] - grouped-links.scss` | NTG Grouped links and job listings |
| `411402` | `[264175] - Components/[411402] - header-style.scss` | **NTG Agency Header structure, logos, search bar & mobile menu** |
| `264191` | `[264175] - Components/[264191] - headings.scss` | NTG Petal animations for heading backgrounds |
| `307277` | `[264175] - Components/[307277] - homepage-alert-tools-lockup.scss` | NTG Homepage alert card & tools quick-access lockup |
| `303372` | `[264175] - Components/[303372] - icons.scss` | NTG Petal icons, Font Awesome helpers & favourites |
| `315686` | `[264175] - Components/[315686] - image-embed.scss` | NTG Image embed component |
| `311858` | `[264175] - Components/[311858] - image-gallery.scss` | NTG Image gallery modal and slider |
| `389584` | `[264175] - Components/[389584] - image-slider.scss` | NTG Image slider heading styles |
| `306004` | `[264175] - Components/[306004] - inpage-filter.scss` | NTG Inpage filter bar (grid/list switcher, dropdowns) |
| `264194` | `[264175] - Components/[264194] - image-treatment.scss` | NTG Image filters, aspect ratios & masks |
| `264195` | `[264175] - Components/[264195] - keyword-list.scss` | NTG Data list definitions & responsive layouts |
| `315207` | `[264175] - Components/[315207] - list-links.scss` | NTG List links styling |
| `326289` | `[264175] - Components/[326289] - my-profile.scss` | NTG User profile page, favorites & avatar changer |
| `305340` | `[264175] - Components/[305340] - nav-main.scss` | **NTG Primary main mega-menu navigation** |
| `264193` | `[264175] - Components/[264193] - nav-inpage-menus.scss` | NTG Jump menu and in-page navigation |
| `264198` | `[264175] - Components/[264198] - news.scss` | NTG News listings, articles, pagination & masonry |
| `325792` | `[264175] - Components/[325792] - online-system-grid.scss` | NTG Online systems grid & bookmarks |
| `264199` | `[264175] - Components/[264199] - page-alerts.scss` | NTG In-page contextual alert boxes |
| `305464` | `[264175] - Components/[305464] - pagination.scss` | NTG Pagination controls & page numbers |
| `303467` | `[264175] - Components/[303467] - pill.scss` | NTG Pill tags & filter checkboxes |
| `264200` | `[264175] - Components/[264200] - progress-bar.scss` | NTG HTML5 progress bar styling |
| `264201` | `[264175] - Components/[264201] - responsive-media.scss` | NTG Responsive video spacing |
| `264202` | `[264175] - Components/[264202] - search.scss` | NTG Search input, submit buttons & facets |
| `264203` | `[264175] - Components/[264203] - select.scss` | NTG Custom dropdown select element |
| `264204` | `[264175] - Components/[264204] - side-nav.scss` | NTG Side navigation accordion & menu styling |
| `323916` | `[264175] - Components/[323916] - skeleton-loader.scss` | NTG Skeleton animated placeholder loader |
| `264205` | `[264175] - Components/[264205] - skip-links.scss` | NTG Skip links component |
| `467780` | `[264175] - Components/[467780] - spinner.scss` | NTG Loading spinner animation |
| `313058` | `[264175] - Components/[313058] - step-list.scss` | NTG Numbered vertical step list |
| `392700` | `[264175] - Components/[392700] - sticky-nav.scss` | NTG Sticky horizontal scroll navigation bar |
| `304428` | `[264175] - Components/[304428] - switch.scss` | NTG Toggle switch slider |
| `264206` | `[264175] - Components/[264206] - table.scss` | NTG Tables, DataTables sorting headers & animations |
| `304653` | `[264175] - Components/[304653] - tabs.scss` | NTG Tabs navigation header |
| `264207` | `[264175] - Components/[264207] - tag.scss` | NTG Tag and agency badges |
| `264208` | `[264175] - Components/[264208] - text-inputs.scss` | NTG Text input controls, currency inputs & date pickers |
| `303774` | `[264175] - Components/[303774] - top-page-alerts.scss` | NTG Top banner urgent site alert messages (Levels 1-5) |
| `306980` | `[264175] - Components/[306980] - video-embed-html5.scss` | NTG HTML5 embedded video player with transcript captions |
| `311857` | `[264175] - Components/[311857] - video-embed.scss` | NTG Video embed wrapper & modal trigger button |

---

## How to Edit & Override in Squiz Matrix

1. **Locate the component**: Use the table above to find the file for what you want to edit (e.g. `[411402] - header-style.scss` or `[305340] - nav-main.scss`).
2. **Edit locally**: Make your changes in that specific `.scss` file.
3. **Live preview**: Vite will instantly reload the page via HMR.
4. **Deploy to Squiz Matrix**: Copy the edited file contents directly into the matching Squiz Matrix asset `#ID` (e.g., Asset `#411402`).
