let mix = require('laravel-mix');

mix.js('src/app.js', 'dist')
    .sass('src/scss/app.scss','css')
    .options({
        postCss: [
            require('@tailwindcss/jit')
        ]
    })
    .browserSync({
        files: ['./**/*.html','./**/*.php','./**/*.css','./**/*.js'],
        proxy: 'http://localhost:7777/static-web/elkiya'
    })
    .setPublicPath('dist');