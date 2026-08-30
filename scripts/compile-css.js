import * as sass from 'sass-embedded';
import fs from 'fs';

console.log('Compiling src/styles/main.scss...');

const result = sass.compile('src/styles/main.scss', {
  style: 'expanded',
  sourceMap: false,
  silenceDeprecations: ['import']
});

fs.writeFileSync('src/styles/compiled-main.css', result.css, 'utf-8');
fs.writeFileSync('DET intranet_files/main.css', result.css, 'utf-8');
console.log('Successfully compiled to src/styles/compiled-main.css and DET intranet_files/main.css');
