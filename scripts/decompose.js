import fs from 'fs';
import path from 'path';

const mainCss = fs.readFileSync('DET intranet_files/main.css', 'utf-8');
const lines = mainCss.split(/\r?\n/);

// Definition of each section with exact asset ID, folder, filename, and line boundaries
const sections = [
  // [846097] - CSS / [846100] - base
  {
    folder: 'src/styles/[846097] - CSS/[846100] - base',
    filename: '[846107] - svgs-agency.scss',
    assetId: '846107',
    startLine: 1,
    endLine: 4,
    description: 'Agency SVG definitions and base header graphic background'
  },
  {
    folder: 'src/styles/[846097] - CSS/[846100] - base',
    filename: '[846102] - variables.scss',
    assetId: '846102',
    startLine: 5,
    endLine: 66,
    description: 'Design system core variables, type scales, and breakpoints'
  },
  {
    folder: 'src/styles/[846097] - CSS/[846100] - base',
    filename: '[846103] - colours.scss',
    assetId: '846103',
    startLine: 67,
    endLine: 198,
    description: 'NTG color palette and background color definitions'
  },
  {
    folder: 'src/styles/[846097] - CSS/[846100] - base',
    filename: '[846104] - mixins.scss',
    assetId: '846104',
    startLine: 199,
    endLine: 303,
    description: 'AUDS math, string, color luminance, and grid mixins'
  },

  // [264064] - AUDS
  {
    folder: 'src/styles/[264064] - AUDS',
    filename: '[264069] - accordions-module.scss',
    assetId: '264069',
    startLine: 304,
    endLine: 464,
    description: 'AUDS Accordion v7.0.8 styles'
  },
  {
    folder: 'src/styles/[264064] - AUDS',
    filename: '[264077] - breadcrumbs-module.scss',
    assetId: '264077',
    startLine: 465,
    endLine: 518,
    description: 'AUDS Breadcrumbs v3.0.5 styles'
  },
  {
    folder: 'src/styles/[264064] - AUDS',
    filename: '[264085] - callout-module.scss',
    assetId: '264085',
    startLine: 519,
    endLine: 619,
    description: 'AUDS Callout v3.0.2 styles'
  },
  {
    folder: 'src/styles/[264064] - AUDS',
    filename: '[264089] - card-module.scss',
    assetId: '264089',
    startLine: 620,
    endLine: 750,
    description: 'AUDS Card v0.3.2 styles'
  },
  {
    folder: 'src/styles/[264064] - AUDS',
    filename: '[264093] - control-input-module.scss',
    assetId: '264093',
    startLine: 751,
    endLine: 1035,
    description: 'AUDS Control Input v3.0.1 styles'
  },
  {
    folder: 'src/styles/[264064] - AUDS',
    filename: '[264097] - cta-module.scss',
    assetId: '264097',
    startLine: 1036,
    endLine: 1113,
    description: 'AUDS Call to Action Link v2.2.0 styles'
  },
  {
    folder: 'src/styles/[264064] - AUDS',
    filename: '[264101] - direction-links-module.scss',
    assetId: '264101',
    startLine: 1114,
    endLine: 1191,
    description: 'AUDS Direction Links v3.0.0 styles'
  },
  {
    folder: 'src/styles/[264064] - AUDS',
    filename: '[264105] - footer-module.scss',
    assetId: '264105',
    startLine: 1192,
    endLine: 1244,
    description: 'AUDS Footer v3.0.5 styles'
  },
  {
    folder: 'src/styles/[264064] - AUDS',
    filename: '[264113] - grid-12-module.scss',
    assetId: '264113',
    startLine: 1245,
    endLine: 1942,
    description: 'AUDS Grid 12 v2.1.0 styles'
  },
  {
    folder: 'src/styles/[264064] - AUDS',
    filename: '[264121] - headings-module.scss',
    assetId: '264121',
    startLine: 1943,
    endLine: 2015,
    description: 'AUDS Headings v2.0.11 styles'
  },
  {
    folder: 'src/styles/[264064] - AUDS',
    filename: '[264125] - inpage-nav-module.scss',
    assetId: '264125',
    startLine: 2016,
    endLine: 2066,
    description: 'AUDS Inpage Nav v3.0.6 styles'
  },
  {
    folder: 'src/styles/[264064] - AUDS',
    filename: '[264129] - keyword-list-module.scss',
    assetId: '264129',
    startLine: 2067,
    endLine: 2110,
    description: 'AUDS Keyword List v3.0.5 styles'
  },
  {
    folder: 'src/styles/[264064] - AUDS',
    filename: '[264133] - link-list-module.scss',
    assetId: '264133',
    startLine: 2111,
    endLine: 2140,
    description: 'AUDS Link List v3.0.8 styles'
  },
  {
    folder: 'src/styles/[264064] - AUDS',
    filename: '[264141] - page-alerts-module.scss',
    assetId: '264141',
    startLine: 2141,
    endLine: 2300,
    description: 'AUDS Page Alerts v2.1.3 styles'
  },
  {
    folder: 'src/styles/[264064] - AUDS',
    filename: '[264149] - responsive-media-module.scss',
    assetId: '264149',
    startLine: 2301,
    endLine: 2334,
    description: 'AUDS Responsive Media v2.0.14 styles'
  },
  {
    folder: 'src/styles/[264064] - AUDS',
    filename: '[264153] - select-module.scss',
    assetId: '264153',
    startLine: 2335,
    endLine: 2434,
    description: 'AUDS Select v2.0.11 styles'
  },
  {
    folder: 'src/styles/[264064] - AUDS',
    filename: '[264157] - side-nav-module.scss',
    assetId: '264157',
    startLine: 2435,
    endLine: 2685,
    description: 'AUDS Side Nav v5.0.7 styles'
  },
  {
    folder: 'src/styles/[264064] - AUDS',
    filename: '[264161] - skip-links-module.scss',
    assetId: '264161',
    startLine: 2686,
    endLine: 2733,
    description: 'AUDS Skip Links v2.0.16 styles'
  },
  {
    folder: 'src/styles/[264064] - AUDS',
    filename: '[264173] - text-inputs-module.scss',
    assetId: '264173',
    startLine: 2734,
    endLine: 2876,
    description: 'AUDS Text Inputs v2.1.2 styles'
  },

  // [407329] - CSS
  {
    folder: 'src/styles/[407329] - CSS',
    filename: '[264312] - custom.scss',
    assetId: '264312',
    startLine: 2877,
    endLine: 2972,
    description: 'Custom base styles, body resets, grid rows'
  },
  {
    folder: 'src/styles/[407329] - CSS',
    filename: '[392760] - custom-agency-intranet.scss',
    assetId: '392760',
    startLine: 2973,
    endLine: 3013,
    description: 'Custom agency shared styles, landing headers, captions'
  },

  // [846097] - CSS / [846100] - base
  {
    folder: 'src/styles/[846097] - CSS/[846100] - base',
    filename: '[846105] - custom.scss',
    assetId: '846105',
    startLine: 3014,
    endLine: 3430,
    description: 'Agency project specific overrides: document search, onboarding cards, color utilities'
  },

  // [305442] - Base
  {
    folder: 'src/styles/[305442] - Base',
    filename: '[264213] - bootstrap-spacing.scss',
    assetId: '264213',
    startLine: 3431,
    endLine: 4570,
    description: 'Bootstrap Grid v4.1.3 spacing utility classes (m-*, p-*)'
  },

  // [264304] - base
  {
    folder: 'src/styles/[264304] - base',
    filename: '[264309] - utils.scss',
    assetId: '264309',
    startLine: 4571,
    endLine: 4630,
    description: 'Global utility classes: w-*, h-*, flex, float'
  },

  // [305442] - Base
  {
    folder: 'src/styles/[305442] - Base',
    filename: '[313423] - bootstrap-custom.scss',
    assetId: '313423',
    startLine: 4631,
    endLine: 5483,
    description: 'NTGC padding/margin scales (ntgc-p-*, ntgc-m-*), responsive orders, font weights, filetype icons'
  },

  // [264175] - Components
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264176] - accordions.scss',
    assetId: '264176',
    startLine: 5484,
    endLine: 5538,
    description: 'NTG Accordion overrides'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264177] - animate.scss',
    assetId: '264177',
    startLine: 5539,
    endLine: 5546,
    description: 'NTG Animations (fadein)'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[303580] - avatar.scss',
    assetId: '303580',
    startLine: 5547,
    endLine: 5717,
    description: 'NTG Avatar styles and sizes'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264178] - badges.scss',
    assetId: '264178',
    startLine: 5718,
    endLine: 5790,
    description: 'NTG Badge component styles'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264179] - banners.scss',
    assetId: '264179',
    startLine: 5791,
    endLine: 5842,
    description: 'NTG Dynamic banner & carousel banner styles'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264180] - body.scss',
    assetId: '264180',
    startLine: 5843,
    endLine: 6435,
    description: 'NTG Body typography, list styles, and blockquotes'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264181] - breadcrumbs.scss',
    assetId: '264181',
    startLine: 6436,
    endLine: 6500,
    description: 'NTG Breadcrumbs component overrides'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264182] - buttons.scss',
    assetId: '264182',
    startLine: 6501,
    endLine: 6662,
    description: 'NTG Button styles and variants'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264183] - callout.scss',
    assetId: '264183',
    startLine: 6663,
    endLine: 6714,
    description: 'NTG Callout component overrides'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264184] - call-to-action.scss',
    assetId: '264184',
    startLine: 6715,
    endLine: 6741,
    description: 'NTG CTA link overrides'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[304051] - cards.scss',
    assetId: '304051',
    startLine: 6742,
    endLine: 7155,
    description: 'NTG Card component overrides, masonry grid, mini cards'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264186] - carousel.scss',
    assetId: '264186',
    startLine: 7156,
    endLine: 7162,
    description: 'NTG Carousel image overrides'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264187] - control-input.scss',
    assetId: '264187',
    startLine: 7163,
    endLine: 7277,
    description: 'NTG Radio and checkbox input controls'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[409203] - contacts.scss',
    assetId: '409203',
    startLine: 7278,
    endLine: 7411,
    description: 'NTG Contacts list & pattern styles'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[315132] - contacts-grid.scss',
    assetId: '315132',
    startLine: 7412,
    endLine: 7525,
    description: 'NTG Phone directory contacts grid & results'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[303820] - counter.scss',
    assetId: '303820',
    startLine: 7526,
    endLine: 7532,
    description: 'NTG Counter badge styles'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264188] - direction-links.scss',
    assetId: '264188',
    startLine: 7533,
    endLine: 7631,
    description: 'NTG Back-to-top and floating feedback buttons'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[311031] - decision-tree.scss',
    assetId: '311031',
    startLine: 7632,
    endLine: 7909,
    description: 'NTG Decision Tree wizard styles'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[421923] - document-list.scss',
    assetId: '421923',
    startLine: 7910,
    endLine: 7918,
    description: 'NTG Document list component'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264189] - fancybox.scss',
    assetId: '264189',
    startLine: 7919,
    endLine: 7922,
    description: 'NTG Fancybox lightbox overrides'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[306408] - featured-content.scss',
    assetId: '306408',
    startLine: 7923,
    endLine: 8326,
    description: 'NTG Featured content blocks, responsive hero cards'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[313424] - filter-popup.scss',
    assetId: '313424',
    startLine: 8327,
    endLine: 8371,
    description: 'NTG Filter popup modal component'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264302] - footer.scss',
    assetId: '264302',
    startLine: 8372,
    endLine: 8491,
    description: 'NTG Footer navigation and layout'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264190] - form.scss',
    assetId: '264190',
    startLine: 8492,
    endLine: 8636,
    description: 'NTG Form question, field, and file upload styles'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[303430] - form-alerts.scss',
    assetId: '303430',
    startLine: 8637,
    endLine: 8698,
    description: 'NTG Form alerts & validation message styles'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[311698] - google-map.scss',
    assetId: '311698',
    startLine: 8699,
    endLine: 8722,
    description: 'NTG Embedded map styles'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264196] - grouped-links.scss',
    assetId: '264196',
    startLine: 8723,
    endLine: 8887,
    description: 'NTG Grouped links and job listings'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[411402] - header-style.scss',
    assetId: '411402',
    startLine: 8888,
    endLine: 9106,
    description: 'NTG Agency Header structure, logos, search bar & mobile menu'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264191] - headings.scss',
    assetId: '264191',
    startLine: 9107,
    endLine: 9158,
    description: 'NTG Petal animations for heading backgrounds'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[307277] - homepage-alert-tools-lockup.scss',
    assetId: '307277',
    startLine: 9159,
    endLine: 9270,
    description: 'NTG Homepage alert card & tools quick-access lockup'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[303372] - icons.scss',
    assetId: '303372',
    startLine: 9271,
    endLine: 9345,
    description: 'NTG Petal icons, Font Awesome helpers, and favourites icons'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[315686] - image-embed.scss',
    assetId: '315686',
    startLine: 9346,
    endLine: 9379,
    description: 'NTG Image embed component'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[311858] - image-gallery.scss',
    assetId: '311858',
    startLine: 9380,
    endLine: 9527,
    description: 'NTG Image gallery modal and slider'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[389584] - image-slider.scss',
    assetId: '389584',
    startLine: 9528,
    endLine: 9537,
    description: 'NTG Image slider heading styles'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[306004] - inpage-filter.scss',
    assetId: '306004',
    startLine: 9538,
    endLine: 9648,
    description: 'NTG Inpage filter bar (grid/list switcher, dropdowns)'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264194] - image-treatment.scss',
    assetId: '264194',
    startLine: 9649,
    endLine: 9733,
    description: 'NTG Image filters, aspect ratios, and masks'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264195] - keyword-list.scss',
    assetId: '264195',
    startLine: 9734,
    endLine: 9783,
    description: 'NTG Data list definitions and responsive layouts'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[315207] - list-links.scss',
    assetId: '315207',
    startLine: 9784,
    endLine: 9828,
    description: 'NTG List links styling'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[326289] - my-profile.scss',
    assetId: '326289',
    startLine: 9829,
    endLine: 10009,
    description: 'NTG User profile page, favorites, and avatar changer'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[305340] - nav-main.scss',
    assetId: '305340',
    startLine: 10010,
    endLine: 10360,
    description: 'NTG Primary main mega-menu navigation'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264193] - nav-inpage-menus.scss',
    assetId: '264193',
    startLine: 10361,
    endLine: 10444,
    description: 'NTG Jump menu and in-page navigation'
  },
  {
    folder: 'src/styles/[264198] - news.scss',
    filename: '[264198] - news.scss',
    assetId: '264198',
    startLine: 10445,
    endLine: 10690,
    description: 'NTG News listings, articles, pagination, and masonry'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[325792] - online-system-grid.scss',
    assetId: '325792',
    startLine: 10691,
    endLine: 10737,
    description: 'NTG Online systems grid and bookmarks'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264199] - page-alerts.scss',
    assetId: '264199',
    startLine: 10738,
    endLine: 10842,
    description: 'NTG In-page contextual alert boxes'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[305464] - pagination.scss',
    assetId: '305464',
    startLine: 10843,
    endLine: 10925,
    description: 'NTG Pagination controls and page numbers'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[303467] - pill.scss',
    assetId: '303467',
    startLine: 10926,
    endLine: 11010,
    description: 'NTG Pill tags & filter checkboxes'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264200] - progress-bar.scss',
    assetId: '264200',
    startLine: 11011,
    endLine: 11037,
    description: 'NTG HTML5 progress bar styling'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264201] - responsive-media.scss',
    assetId: '264201',
    startLine: 11038,
    endLine: 11041,
    description: 'NTG Responsive video spacing'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264202] - search.scss',
    assetId: '264202',
    startLine: 11042,
    endLine: 11175,
    description: 'NTG Search input, submit buttons, facets, and search results'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264203] - select.scss',
    assetId: '264203',
    startLine: 11176,
    endLine: 11246,
    description: 'NTG Custom dropdown select element'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264204] - side-nav.scss',
    assetId: '264204',
    startLine: 11247,
    endLine: 11334,
    description: 'NTG Side navigation accordion & menu styling'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[323916] - skeleton-loader.scss',
    assetId: '323916',
    startLine: 11335,
    endLine: 11375,
    description: 'NTG Skeleton animated placeholder loader'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[467780] - spinner.scss',
    assetId: '467780',
    startLine: 11376,
    endLine: 11415,
    description: 'NTG Loading spinner animation'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[313058] - step-list.scss',
    assetId: '313058',
    startLine: 11416,
    endLine: 11470,
    description: 'NTG Numbered vertical step list'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[392700] - sticky-nav.scss',
    assetId: '392700',
    startLine: 11471,
    endLine: 11542,
    description: 'NTG Sticky horizontal scroll navigation bar'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[304428] - switch.scss',
    assetId: '304428',
    startLine: 11543,
    endLine: 11586,
    description: 'NTG Toggle switch slider'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264206] - table.scss',
    assetId: '264206',
    startLine: 11587,
    endLine: 11840,
    description: 'NTG Tables, DataTables sorting headers, and table animations'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[304653] - tabs.scss',
    assetId: '304653',
    startLine: 11841,
    endLine: 11891,
    description: 'NTG Tabs navigation header'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264207] - tag.scss',
    assetId: '264207',
    startLine: 11892,
    endLine: 11911,
    description: 'NTG Tag and agency badges'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264208] - text-inputs.scss',
    assetId: '264208',
    startLine: 11912,
    endLine: 12046,
    description: 'NTG Text input controls, currency inputs, and date pickers'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[303774] - top-page-alerts.scss',
    assetId: '303774',
    startLine: 12047,
    endLine: 12147,
    description: 'NTG Top banner urgent site alert messages (Levels 1-5)'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[306980] - video-embed-html5.scss',
    assetId: '306980',
    startLine: 12148,
    endLine: 12195,
    description: 'NTG HTML5 embedded video player with transcript captions'
  },
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[311857] - video-embed.scss',
    assetId: '311857',
    startLine: 12196,
    endLine: 12218,
    description: 'NTG Video embed wrapper & modal trigger button'
  },
  {
    folder: 'src/styles/[846097] - CSS',
    filename: 'custom-header-overrides.scss',
    assetId: 'inline-parse-header',
    startLine: 12219,
    endLine: 12232,
    description: 'Custom header overrides defined directly in parse file'
  },
  {
    folder: 'src/styles/[305442] - Base',
    filename: '[400319] - print.scss',
    assetId: '400319',
    startLine: 12233,
    endLine: 12467,
    description: 'Print media styles'
  },
  {
    folder: 'src/styles/[846097] - CSS/[846100] - base',
    filename: '[989747] - secondary-navigation.css',
    assetId: '989747',
    startLine: 12468,
    endLine: 12631,
    description: 'Agency secondary sub-navigation styles & header inner fix'
  }
];

console.log('Writing modular SCSS files...');

// Make sure directories exist
for (const sec of sections) {
  fs.mkdirSync(sec.folder, { recursive: true });
  const content = lines.slice(sec.startLine - 1, sec.endLine).join('\n');
  const fileHeader = `/* ==========================================================================\n   Squiz Matrix Asset ID: #${sec.assetId}\n   Filename: ${sec.filename}\n   Description: ${sec.description}\n   ========================================================================== */\n\n`;
  fs.writeFileSync(path.join(sec.folder, sec.filename), fileHeader + content, 'utf-8');
}

console.log(`Successfully extracted ${sections.length} individual SCSS/CSS component files.`);
