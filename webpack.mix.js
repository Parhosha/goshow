const mix = require('laravel-mix');


require('laravel-mix-eslint')

mix.js('resources/js/app.js', 'public/js')
    .react()
    .eslint({
        fix: true,
        extensions: ['js']
        //...
      })
    .sass('resources/sass/app.scss', 'public/css');
