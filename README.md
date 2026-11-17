# Portfolio
This is my personal portfolio website.

## Preview
[dawidflorian.pl](https://dawidflorian.pl/)
## Technologies
Project is created with:
* Bootstrap
* JavaScript
* Html / Css
* PurgeCSS

## Build
The page loads the trimmed CSS from `css/prod`. After changing classes or icons in `index.html` or `js/*.js`, rebuild it:
```
npm install
npm run build
```
This purges `css/dev/*.css` into `css/prod` and shrinks the Bootstrap Icons font to the `bi-*` icons used in `index.html`, inlined into `css/prod/bootstrap-icons.css`.