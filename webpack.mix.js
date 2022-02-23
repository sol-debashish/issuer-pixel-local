const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');

mix.sass('resources/js/assets/scss/shared/style.scss', 'public/css/dashboard_merged.css');

mix.combine(['public/vendor/aos/aos.js', 'public/js/main.js', 'public/js/jquery-confirm.min.js','public/js/toastr.min.js','public/js/amplitude.js','public/js/michaelbromley.js'], 'public/js/merged.js')
mix.combine(['public/css/app.css',
    'public/vendor/aos/aos.css',
    'public/css/vue-select.css',
    'public/css/cropper.min.css',
    'public/css/jquery-confirm.min.css',
    'public/css/toastr.min.css',
    'public/css/style.css',
    'public/css/issuer-dashboard.css'
], 'public/css/merged.css')

mix.combine(['public/css/adminlte.min.css',
    'public/plugins/select2/css/select2.min.css',
    'public/plugins/overlayScrollbars/css/OverlayScrollbars.min.css',
    'public/css/toastr.min.css',
    'public/plugins/jquery-ui/jquery-ui.min.css',
], 'public/css/merged_admin.css')
mix.combine(['public/plugins/jquery/jquery.min.js',
    'public/plugins/jquery-ui/jquery-ui.min.js',
    'public/plugins/bootstrap/js/bootstrap.bundle.min.js',
    'public/plugins/select2/js/select2.min.js',
    'public/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js',
    'public/js/adminlte.min.js',
    'public/js/toastr.min.js'
], 'public/js/admin_merged.js')
