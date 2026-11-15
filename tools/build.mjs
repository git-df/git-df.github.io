// Production build (npm run build):
// 1. PurgeCSS: css/dev/*.css -> css/prod/*.css, keeping only selectors used in index.html and js/*.js.
// 2. Shrinks the Bootstrap Icons font to the bi-* icons used in index.html and points
//    css/prod/bootstrap-icons.css at css/fonts/bootstrap-icons-subset.woff2.
import { createHash } from 'node:crypto';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { basename, join } from 'node:path';
import { PurgeCSS } from 'purgecss';
import subsetFont from 'subset-font';
import config from '../purgecss.config.js';

const { output, ...purgeOptions } = config;
mkdirSync(output, { recursive: true });
for (const result of await new PurgeCSS().purge(purgeOptions)) {
    const target = join(output, basename(result.file));
    writeFileSync(target, result.css);
    console.log(`${target}: ${(result.css.length / 1024).toFixed(1)} KB`);
}

const html = readFileSync('index.html', 'utf8');
const devCss = readFileSync('css/dev/bootstrap-icons.css', 'utf8');
const prodCssPath = join(output, 'bootstrap-icons.css');

const icons = [...new Set(html.match(/\bbi-[a-z0-9-]+/g) ?? [])];
const chars = icons.map(icon => {
    const rule = devCss.match(new RegExp(`\\.${icon}::before\\s*\\{\\s*content:\\s*"\\\\([0-9a-f]+)"`));
    if (!rule) throw new Error(`Unknown icon: ${icon}`);
    return String.fromCodePoint(parseInt(rule[1], 16));
}).join('');

const font = await subsetFont(readFileSync('css/fonts/bootstrap-icons.woff2'), chars, { targetFormat: 'woff2' });
writeFileSync('css/fonts/bootstrap-icons-subset.woff2', font);

const version = createHash('md5').update(font).digest('hex').slice(0, 8);
const prodCss = readFileSync(prodCssPath, 'utf8')
    .replace(/src:\s*url\("\.\.\/fonts\/bootstrap-icons\.woff2[^;]*;/,
             `src: url("../fonts/bootstrap-icons-subset.woff2?${version}") format("woff2");`);
if (!prodCss.includes('bootstrap-icons-subset.woff2')) throw new Error(`No @font-face src found in ${prodCssPath}`);
writeFileSync(prodCssPath, prodCss);

console.log(`css/fonts/bootstrap-icons-subset.woff2: ${icons.length} icons, ${(font.length / 1024).toFixed(1)} KB`);
