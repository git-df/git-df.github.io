// Production build (npm run build):
// 1. PurgeCSS: css/dev/*.css -> css/prod/*.css, keeping only selectors used in index.html and js/*.js.
// 2. Shrinks the Bootstrap Icons font to the bi-* icons used in index.html and inlines it
//    into css/prod/bootstrap-icons.css, so the icons need no extra request.
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
const prodCss = readFileSync(prodCssPath, 'utf8')
    .replace(/src:\s*url\("\.\.\/fonts\/bootstrap-icons\.woff2[^;]*;/,
             `src: url(data:font/woff2;base64,${font.toString('base64')}) format("woff2");`);
if (!prodCss.includes('data:font/woff2')) throw new Error(`No @font-face src found in ${prodCssPath}`);
writeFileSync(prodCssPath, prodCss);

console.log(`Icon font: ${icons.length} icons, ${(font.length / 1024).toFixed(1)} KB inlined into ${prodCssPath}`);
