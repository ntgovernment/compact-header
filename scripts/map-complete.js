import fs from 'fs';
import path from 'path';
import * as sass from 'sass-embedded';

const mainCss = fs.readFileSync('DET intranet_files/main.css', 'utf-8');
const lines = mainCss.split(/\r?\n/);

// We will define every section in sequence matching the exact lines in main.css
const sections = [
  // 1. [846097] - CSS / [846100] - base / [846107] - svgs-agency.scss
  {
    folder: 'src/styles/[846097] - CSS/[846100] - base',
    filename: '[846107] - svgs-agency.scss',
    assetId: '846107',
    start: 1,
    end: 4,
    description: 'Agency SVGs & graphic overrides'
  },
  // 2. [846097] - CSS / [846100] - base / [846102] - variables.scss
  {
    folder: 'src/styles/[846097] - CSS/[846100] - base',
    filename: '[846102] - variables.scss',
    assetId: '846102',
    start: 5,
    end: 66,
    description: 'Variables, typography scales, spacing & breakpoints'
  },
  // 3. [846097] - CSS / [846100] - base / [846103] - colours.scss
  {
    folder: 'src/styles/[846097] - CSS/[846100] - base',
    filename: '[846103] - colours.scss',
    assetId: '846103',
    start: 67,
    end: 198,
    description: 'NTG colour palettes and text/bg utility classes'
  },
  // 4. [846097] - CSS / [846100] - base / [846104] - mixins.scss
  {
    folder: 'src/styles/[846097] - CSS/[846100] - base',
    filename: '[846104] - mixins.scss',
    assetId: '846104',
    start: 199,
    end: 303,
    description: 'AUDS mixins (replace, svguri, math, luminance, space, focus, fontgrid)'
  },
  // 5. [264064] - AUDS / [264069] - accordions-module.scss
  {
    folder: 'src/styles/[264064] - AUDS',
    filename: '[264069] - accordions-module.scss',
    assetId: '264069',
    start: 304,
    end: 464,
    description: '@gov.au/accordion v7.0.8'
  },
  // 6. [264064] - AUDS / [264077] - breadcrumbs-module.scss
  {
    folder: 'src/styles/[264064] - AUDS',
    filename: '[264077] - breadcrumbs-module.scss',
    assetId: '264077',
    start: 465,
    end: 518,
    description: '@gov.au/breadcrumbs v3.0.5'
  },
  // 7. [264064] - AUDS / [264085] - callout-module.scss
  {
    folder: 'src/styles/[264064] - AUDS',
    filename: '[264085] - callout-module.scss',
    assetId: '264085',
    start: 519,
    end: 619,
    description: '@gov.au/callout v3.0.2'
  },
  // 8. [264064] - AUDS / [264089] - card-module.scss
  {
    folder: 'src/styles/[264064] - AUDS',
    filename: '[264089] - card-module.scss',
    assetId: '264089',
    start: 620,
    end: 750,
    description: '@gov.au/card v0.3.2'
  },
  // 9. [264064] - AUDS / [264093] - control-input-module.scss
  {
    folder: 'src/styles/[264064] - AUDS',
    filename: '[264093] - control-input-module.scss',
    assetId: '264093',
    start: 751,
    end: 1035,
    description: '@gov.au/control-input v3.0.1'
  },
  // 10. [264064] - AUDS / [264097] - cta-module.scss
  {
    folder: 'src/styles/[264064] - AUDS',
    filename: '[264097] - cta-module.scss',
    assetId: '264097',
    start: 1036,
    end: 1113,
    description: '@gov.au/cta-link v2.2.0'
  },
  // 11. [264064] - AUDS / [264101] - direction-links-module.scss
  {
    folder: 'src/styles/[264064] - AUDS',
    filename: '[264101] - direction-links-module.scss',
    assetId: '264101',
    start: 1114,
    end: 1191,
    description: '@gov.au/direction-links v3.0.0'
  },
  // 12. [264064] - AUDS / [264105] - footer-module.scss
  {
    folder: 'src/styles/[264064] - AUDS',
    filename: '[264105] - footer-module.scss',
    assetId: '264105',
    start: 1192,
    end: 1244,
    description: '@gov.au/footer v3.0.5'
  },
  // 13. [264064] - AUDS / [264113] - grid-12-module.scss
  {
    folder: 'src/styles/[264064] - AUDS',
    filename: '[264113] - grid-12-module.scss',
    assetId: '264113',
    start: 1245,
    end: 1942,
    description: '@gov.au/grid-12 v2.1.0'
  },
  // 14. [264064] - AUDS / [264121] - headings-module.scss
  {
    folder: 'src/styles/[264064] - AUDS',
    filename: '[264121] - headings-module.scss',
    assetId: '264121',
    start: 1943,
    end: 2015,
    description: '@gov.au/headings v2.0.11'
  },
  // 15. [264064] - AUDS / [264125] - inpage-nav-module.scss
  {
    folder: 'src/styles/[264064] - AUDS',
    filename: '[264125] - inpage-nav-module.scss',
    assetId: '264125',
    start: 2016,
    end: 2066,
    description: '@gov.au/inpage-nav v3.0.6'
  },
  // 16. [264064] - AUDS / [264129] - keyword-list-module.scss
  {
    folder: 'src/styles/[264064] - AUDS',
    filename: '[264129] - keyword-list-module.scss',
    assetId: '264129',
    start: 2067,
    end: 2110,
    description: '@gov.au/keyword-list v3.0.5'
  },
  // 17. [264064] - AUDS / [264133] - link-list-module.scss
  {
    folder: 'src/styles/[264064] - AUDS',
    filename: '[264133] - link-list-module.scss',
    assetId: '264133',
    start: 2111,
    end: 2140,
    description: '@gov.au/link-list v3.0.8'
  },
  // 18. [264064] - AUDS / [264141] - page-alerts-module.scss
  {
    folder: 'src/styles/[264064] - AUDS',
    filename: '[264141] - page-alerts-module.scss',
    assetId: '264141',
    start: 2141,
    end: 2300,
    description: '@gov.au/page-alerts v2.1.3'
  },
  // 19. [264064] - AUDS / [264149] - responsive-media-module.scss
  {
    folder: 'src/styles/[264064] - AUDS',
    filename: '[264149] - responsive-media-module.scss',
    assetId: '264149',
    start: 2301,
    end: 2334,
    description: '@gov.au/responsive-media v2.0.14'
  },
  // 20. [264064] - AUDS / [264153] - select-module.scss
  {
    folder: 'src/styles/[264064] - AUDS',
    filename: '[264153] - select-module.scss',
    assetId: '264153',
    start: 2335,
    end: 2434,
    description: '@gov.au/select v2.0.11'
  },
  // 21. [264064] - AUDS / [264157] - side-nav-module.scss
  {
    folder: 'src/styles/[264064] - AUDS',
    filename: '[264157] - side-nav-module.scss',
    assetId: '264157',
    start: 2435,
    end: 2685,
    description: '@gov.au/side-nav v5.0.7'
  },
  // 22. [264064] - AUDS / [264161] - skip-links-module.scss
  {
    folder: 'src/styles/[264064] - AUDS',
    filename: '[264161] - skip-links-module.scss',
    assetId: '264161',
    start: 2686,
    end: 2733,
    description: '@gov.au/skip-link v2.0.16'
  },
  // 23. [264064] - AUDS / [264173] - text-inputs-module.scss
  {
    folder: 'src/styles/[264064] - AUDS',
    filename: '[264173] - text-inputs-module.scss',
    assetId: '264173',
    start: 2734,
    end: 2876,
    description: '@gov.au/text-inputs v2.1.2'
  },
  // 24. [407329] - CSS / [264312] - custom.scss
  {
    folder: 'src/styles/[407329] - CSS',
    filename: '[264312] - custom.scss',
    assetId: '264312',
    start: 2877,
    end: 2972,
    description: 'Custom base styles, body resets, grid rows'
  },
  // 25. [407329] - CSS / [392760] - custom-agency-intranet.scss
  {
    folder: 'src/styles/[407329] - CSS',
    filename: '[392760] - custom-agency-intranet.scss',
    assetId: '392760',
    start: 2973,
    end: 3013,
    description: 'Custom agency intranet styles (landing-header, etc.)'
  },
  // 26. [846097] - CSS / [846100] - base / [846105] - custom.scss
  {
    folder: 'src/styles/[846097] - CSS/[846100] - base',
    filename: '[846105] - custom.scss',
    assetId: '846105',
    start: 3014,
    end: 3430,
    description: 'Agency project specific styles (doc search, onboarding, colour helper classes)'
  },
  // 27. [305442] - Base / [264213] - bootstrap-spacing.scss
  {
    folder: 'src/styles/[305442] - Base',
    filename: '[264213] - bootstrap-spacing.scss',
    assetId: '264213',
    start: 3431,
    end: 4570,
    description: 'Bootstrap Grid v4.1.3 spacing utility classes (m-*, p-*)'
  },
  // 28. [264304] - base / [264309] - utils.scss
  {
    folder: 'src/styles/[264304] - base',
    filename: '[264309] - utils.scss',
    assetId: '264309',
    start: 4571,
    end: 4630,
    description: 'Utils (w-*, h-*, flex, float, display)'
  },
  // 29. [305442] - Base / [313423] - bootstrap-custom.scss
  {
    folder: 'src/styles/[305442] - Base',
    filename: '[313423] - bootstrap-custom.scss',
    assetId: '313423',
    start: 4631,
    end: 5483,
    description: 'NTGC padding/margin scales (ntgc-p-*, ntgc-m-*), responsive orders, font weights, filetype icons'
  },
  // 30. [264175] - Components / [264176] - accordions.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264176] - accordions.scss',
    assetId: '264176',
    start: 5484,
    end: 5538,
    description: 'NTG Accordion overrides'
  },
  // 31. [264175] - Components / [264177] - animate.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264177] - animate.scss',
    assetId: '264177',
    start: 5539,
    end: 5546,
    description: 'NTG Animation keyframes (fadein)'
  },
  // 32. [264175] - Components / [303580] - avatar.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[303580] - avatar.scss',
    assetId: '303580',
    start: 5547,
    end: 5717,
    description: 'NTG Avatar sizes and user info'
  },
  // 33. [264175] - Components / [264178] - badges.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264178] - badges.scss',
    assetId: '264178',
    start: 5718,
    end: 5790,
    description: 'NTG Badge component styles'
  },
  // 34. [264175] - Components / [264179] - banners.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264179] - banners.scss',
    assetId: '264179',
    start: 5791,
    end: 5842,
    description: 'NTG Dynamic banner & carousel banner styles'
  },
  // 35. [264175] - Components / [264180] - body.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264180] - body.scss',
    assetId: '264180',
    start: 5843,
    end: 6435,
    description: 'NTG Body typography, list styles, and blockquotes'
  },
  // 36. [264175] - Components / [264181] - breadcrumbs.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264181] - breadcrumbs.scss',
    assetId: '264181',
    start: 6436,
    end: 6500,
    description: 'NTG Breadcrumbs component overrides'
  },
  // 37. [264175] - Components / [264182] - buttons.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264182] - buttons.scss',
    assetId: '264182',
    start: 6501,
    end: 6662,
    description: 'NTG Button styles, variants & hover interactions'
  },
  // 38. [264175] - Components / [264183] - callout.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264183] - callout.scss',
    assetId: '264183',
    start: 6663,
    end: 6714,
    description: 'NTG Callout component overrides'
  },
  // 39. [264175] - Components / [264184] - call-to-action.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264184] - call-to-action.scss',
    assetId: '264184',
    start: 6715,
    end: 6741,
    description: 'NTG CTA link overrides'
  },
  // 40. [264175] - Components / [304051] - cards.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[304051] - cards.scss',
    assetId: '304051',
    start: 6742,
    end: 7155,
    description: 'NTG Card component overrides, masonry grid, mini cards'
  },
  // 41. [264175] - Components / [264186] - carousel.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264186] - carousel.scss',
    assetId: '264186',
    start: 7156,
    end: 7162,
    description: 'NTG Carousel image overrides'
  },
  // 42. [264175] - Components / [264187] - control-input.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264187] - control-input.scss',
    assetId: '264187',
    start: 7163,
    end: 7277,
    description: 'NTG Radio and checkbox input controls'
  },
  // 43. [264175] - Components / [409203] - contacts.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[409203] - contacts.scss',
    assetId: '409203',
    start: 7278,
    end: 7411,
    description: 'NTG Contacts list, blocks & persons pattern styles'
  },
  // 44. [264175] - Components / [315132] - contacts-grid.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[315132] - contacts-grid.scss',
    assetId: '315132',
    start: 7412,
    end: 7525,
    description: 'NTG Phone directory contacts search, results & favourites'
  },
  // 45. [264175] - Components / [303820] - counter.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[303820] - counter.scss',
    assetId: '303820',
    start: 7526,
    end: 7532,
    description: 'NTG Counter badge styles'
  },
  // 46. [264175] - Components / [264188] - direction-links.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264188] - direction-links.scss',
    assetId: '264188',
    start: 7533,
    end: 7631,
    description: 'NTG Back-to-top and floating feedback buttons'
  },
  // 47. [264175] - Components / [311031] - decision-tree.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[311031] - decision-tree.scss',
    assetId: '311031',
    start: 7632,
    end: 7909,
    description: 'NTG Decision Tree wizard styles & form questions'
  },
  // 48. [264175] - Components / [421923] - document-list.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[421923] - document-list.scss',
    assetId: '421923',
    start: 7910,
    end: 7918,
    description: 'NTG Document list component'
  },
  // 49. [264175] - Components / [264189] - fancybox.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264189] - fancybox.scss',
    assetId: '264189',
    start: 7919,
    end: 7922,
    description: 'NTG Fancybox lightbox overrides'
  },
  // 50. [264175] - Components / [306408] - featured-content.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[306408] - featured-content.scss',
    assetId: '306408',
    start: 7923,
    end: 8326,
    description: 'NTG Featured content blocks, responsive hero cards & credits'
  },
  // 51. [264175] - Components / [313424] - filter-popup.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[313424] - filter-popup.scss',
    assetId: '313424',
    start: 8327,
    end: 8371,
    description: 'NTG Filter popup modal component'
  },
  // 52. [264175] - Components / [264302] - footer.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264302] - footer.scss',
    assetId: '264302',
    start: 8372,
    end: 8491,
    description: 'NTG Footer navigation and layout'
  },
  // 53. [264175] - Components / [264190] - form.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264190] - form.scss',
    assetId: '264190',
    start: 8492,
    end: 8636,
    description: 'NTG Form question, field, and file upload styles'
  },
  // 54. [264175] - Components / [303430] - form-alerts.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[303430] - form-alerts.scss',
    assetId: '303430',
    start: 8637,
    end: 8698,
    description: 'NTG Form alerts & validation message styles'
  },
  // 55. [264175] - Components / [311698] - google-map.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[311698] - google-map.scss',
    assetId: '311698',
    start: 8699,
    end: 8722,
    description: 'NTG Embedded map styles'
  },
  // 56. [264175] - Components / [264196] - grouped-links.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264196] - grouped-links.scss',
    assetId: '264196',
    start: 8723,
    end: 8887,
    description: 'NTG Grouped links and job listings'
  },
  // 57. [264175] - Components / [411402] - header-style.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[411402] - header-style.scss',
    assetId: '411402',
    start: 8888,
    end: 9106,
    description: 'NTG Agency Header structure, logos, search bar & mobile menu'
  },
  // 58. [264175] - Components / [264191] - headings.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264191] - headings.scss',
    assetId: '264191',
    start: 9107,
    end: 9158,
    description: 'NTG Petal animations for heading backgrounds'
  },
  // 59. [264175] - Components / [307277] - homepage-alert-tools-lockup.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[307277] - homepage-alert-tools-lockup.scss',
    assetId: '307277',
    start: 9159,
    end: 9270,
    description: 'NTG Homepage alert card & tools quick-access lockup'
  },
  // 60. [264175] - Components / [303372] - icons.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[303372] - icons.scss',
    assetId: '303372',
    start: 9271,
    end: 9345,
    description: 'NTG Petal icons, Font Awesome helpers, and favourites icons'
  },
  // 61. [264175] - Components / [315686] - image-embed.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[315686] - image-embed.scss',
    assetId: '315686',
    start: 9346,
    end: 9379,
    description: 'NTG Image embed component'
  },
  // 62. [264175] - Components / [311858] - image-gallery.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[311858] - image-gallery.scss',
    assetId: '311858',
    start: 9380,
    end: 9527,
    description: 'NTG Image gallery modal and slider'
  },
  // 63. [264175] - Components / [389584] - image-slider.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[389584] - image-slider.scss',
    assetId: '389584',
    start: 9528,
    end: 9537,
    description: 'NTG Image slider heading styles'
  },
  // 64. [264175] - Components / [306004] - inpage-filter.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[306004] - inpage-filter.scss',
    assetId: '306004',
    start: 9538,
    end: 9648,
    description: 'NTG Inpage filter bar (grid/list switcher, dropdowns)'
  },
  // 65. [264175] - Components / [264194] - image-treatment.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264194] - image-treatment.scss',
    assetId: '264194',
    start: 9649,
    end: 9733,
    description: 'NTG Image filters, aspect ratios, and masks'
  },
  // 66. [264175] - Components / [264195] - keyword-list.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264195] - keyword-list.scss',
    assetId: '264195',
    start: 9734,
    end: 9783,
    description: 'NTG Data list definitions and responsive layouts'
  },
  // 67. [264175] - Components / [315207] - list-links.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[315207] - list-links.scss',
    assetId: '315207',
    start: 9784,
    end: 9828,
    description: 'NTG List links styling'
  },
  // 68. [264175] - Components / [326289] - my-profile.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[326289] - my-profile.scss',
    assetId: '326289',
    start: 9829,
    end: 10009,
    description: 'NTG User profile page, favorites, and avatar changer'
  },
  // 69. [264175] - Components / [305340] - nav-main.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[305340] - nav-main.scss',
    assetId: '305340',
    start: 10010,
    end: 10360,
    description: 'NTG Primary main mega-menu navigation'
  },
  // 70. [264175] - Components / [264193] - nav-inpage-menus.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264193] - nav-inpage-menus.scss',
    assetId: '264193',
    start: 10361,
    end: 10444,
    description: 'NTG Jump menu and in-page navigation'
  },
  // 71. [264175] - Components / [264198] - news.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264198] - news.scss',
    assetId: '264198',
    start: 10445,
    end: 10690,
    description: 'NTG News listings, articles, pagination, and masonry'
  },
  // 72. [264175] - Components / [325792] - online-system-grid.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[325792] - online-system-grid.scss',
    assetId: '325792',
    start: 10691,
    end: 10737,
    description: 'NTG Online systems grid and bookmarks'
  },
  // 73. [264175] - Components / [264199] - page-alerts.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264199] - page-alerts.scss',
    assetId: '264199',
    start: 10738,
    end: 10842,
    description: 'NTG In-page contextual alert boxes'
  },
  // 74. [264175] - Components / [305464] - pagination.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[305464] - pagination.scss',
    assetId: '305464',
    start: 10843,
    end: 10925,
    description: 'NTG Pagination controls and page numbers'
  },
  // 75. [264175] - Components / [303467] - pill.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[303467] - pill.scss',
    assetId: '303467',
    start: 10926,
    end: 11010,
    description: 'NTG Pill tags & filter checkboxes'
  },
  // 76. [264175] - Components / [264200] - progress-bar.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264200] - progress-bar.scss',
    assetId: '264200',
    start: 11011,
    end: 11037,
    description: 'NTG HTML5 progress bar styling'
  },
  // 77. [264175] - Components / [264201] - responsive-media.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264201] - responsive-media.scss',
    assetId: '264201',
    start: 11038,
    end: 11041,
    description: 'NTG Responsive video spacing'
  },
  // 78. [264175] - Components / [264202] - search.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264202] - search.scss',
    assetId: '264202',
    start: 11042,
    end: 11175,
    description: 'NTG Search input, submit buttons, facets, and search results'
  },
  // 79. [264175] - Components / [264203] - select.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264203] - select.scss',
    assetId: '264203',
    start: 11176,
    end: 11246,
    description: 'NTG Custom dropdown select element'
  },
  // 80. [264175] - Components / [264204] - side-nav.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264204] - side-nav.scss',
    assetId: '264204',
    start: 11247,
    end: 11334,
    description: 'NTG Side navigation accordion & menu styling'
  },
  // 81. [264175] - Components / [323916] - skeleton-loader.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[323916] - skeleton-loader.scss',
    assetId: '323916',
    start: 11335,
    end: 11375,
    description: 'NTG Skeleton animated placeholder loader'
  },
  // 82. [264175] - Components / [467780] - spinner.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[467780] - spinner.scss',
    assetId: '467780',
    start: 11376,
    end: 11415,
    description: 'NTG Loading spinner animation'
  },
  // 83. [264175] - Components / [313058] - step-list.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[313058] - step-list.scss',
    assetId: '313058',
    start: 11416,
    end: 11470,
    description: 'NTG Numbered vertical step list'
  },
  // 84. [264175] - Components / [392700] - sticky-nav.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[392700] - sticky-nav.scss',
    assetId: '392700',
    start: 11471,
    end: 11542,
    description: 'NTG Sticky horizontal scroll navigation bar'
  },
  // 85. [264175] - Components / [304428] - switch.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[304428] - switch.scss',
    assetId: '304428',
    start: 11543,
    end: 11586,
    description: 'NTG Toggle switch slider'
  },
  // 86. [264175] - Components / [264206] - table.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264206] - table.scss',
    assetId: '264206',
    start: 11587,
    end: 11840,
    description: 'NTG Tables, DataTables sorting headers, and table animations'
  },
  // 87. [264175] - Components / [304653] - tabs.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[304653] - tabs.scss',
    assetId: '304653',
    start: 11841,
    end: 11891,
    description: 'NTG Tabs navigation header'
  },
  // 88. [264175] - Components / [264207] - tag.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264207] - tag.scss',
    assetId: '264207',
    start: 11892,
    end: 11911,
    description: 'NTG Tag and agency badges'
  },
  // 89. [264175] - Components / [264208] - text-inputs.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[264208] - text-inputs.scss',
    assetId: '264208',
    start: 11912,
    end: 12046,
    description: 'NTG Text input controls, currency inputs, and date pickers'
  },
  // 90. [264175] - Components / [303774] - top-page-alerts.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[303774] - top-page-alerts.scss',
    assetId: '303774',
    start: 12047,
    end: 12147,
    description: 'NTG Top banner urgent site alert messages (Levels 1-5)'
  },
  // 91. [264175] - Components / [306980] - video-embed-html5.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[306980] - video-embed-html5.scss',
    assetId: '306980',
    start: 12148,
    end: 12195,
    description: 'NTG HTML5 embedded video player with transcript captions'
  },
  // 92. [264175] - Components / [311857] - video-embed.scss
  {
    folder: 'src/styles/[264175] - Components',
    filename: '[311857] - video-embed.scss',
    assetId: '311857',
    start: 12196,
    end: 12218,
    description: 'NTG Video embed wrapper & modal trigger button'
  },
  // 93. [846097] - CSS / custom-header-overrides.scss
  {
    folder: 'src/styles/[846097] - CSS',
    filename: 'custom-header-overrides.scss',
    assetId: 'inline-parse-header',
    start: 12219,
    end: 12232,
    description: 'Custom header overrides defined directly in parse file'
  },
  // 94. [305442] - Base / [400319] - print.scss
  {
    folder: 'src/styles/[305442] - Base',
    filename: '[400319] - print.scss',
    assetId: '400319',
    start: 12233,
    end: 12467,
    description: 'Print media styles'
  },
  // 95. [846097] - CSS / [846100] - base / [989747] - secondary-navigation.css
  {
    folder: 'src/styles/[846097] - CSS/[846100] - base',
    filename: '[989747] - secondary-navigation.css',
    assetId: '989747',
    start: 12468,
    end: 12631,
    description: 'Agency secondary sub-navigation styles & header inner fix'
  }
];

// Clean up old faulty directories if any
if (fs.existsSync('src/styles/[264198] - news.scss')) {
  fs.rmSync('src/styles/[264198] - news.scss', { recursive: true, force: true });
}

console.log('Writing all modular SCSS/CSS component files...');
for (const sec of sections) {
  fs.mkdirSync(sec.folder, { recursive: true });
  let content = lines.slice(sec.start - 1, sec.end).join('\n');
  if (sec.filename === '[264190] - form.scss') {
    content = content.replace(
      '@media all and (-ms-high-contrast: none), (-ms-high-contrast: active), @supports (-ms-ime-align:auto) {',
      '@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {'
    );
  }
  const fileHeader = `/* ==========================================================================\n   Squiz Matrix Asset ID: #${sec.assetId}\n   Filename: ${sec.filename}\n   Description: ${sec.description}\n   ========================================================================== */\n\n`;
  fs.writeFileSync(path.join(sec.folder, sec.filename), fileHeader + content, 'utf-8');
}

// Write the main.scss entry point
const mainScssLines = [
  '@charset "UTF-8";',
  '',
  '/* ==========================================================================',
  '   Squiz Matrix Parse File: #[846098] - main.css',
  '   Recreated Modular SCSS Entry Point',
  '   ========================================================================== */',
  ''
];

for (const sec of sections) {
  const relPath = path.posix.join('.', path.relative('src/styles', sec.folder).replace(/\\/g, '/'), sec.filename);
  mainScssLines.push(`// Asset #${sec.assetId}: ${sec.description}`);
  mainScssLines.push(`@import '${relPath}';\n`);
}

fs.writeFileSync('src/styles/main.scss', mainScssLines.join('\n'), 'utf-8');
// Also create a copy in [846097] - CSS/[846098] - main.scss
fs.writeFileSync('src/styles/[846097] - CSS/[846098] - main.scss', mainScssLines.join('\n'), 'utf-8');

console.log('Testing compilation of main.scss...');
const result = sass.compile('src/styles/main.scss', {
  style: 'expanded',
  sourceMap: false,
  silenceDeprecations: ['import']
});

fs.writeFileSync('src/styles/compiled-main.css', result.css, 'utf-8');
console.log('Successfully compiled src/styles/main.scss to src/styles/compiled-main.css!');
console.log('Compiled lines:', result.css.split(/\r?\n/).length);
