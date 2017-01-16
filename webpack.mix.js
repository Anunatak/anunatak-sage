let mix = require('laravel-mix').mix;

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

/**
 * Some minor adjustments to the Mix webpack config without losing the vendor config
 */
mix.webpackConfig({
  externals: {
    jquery: 'jQuery'
  },
  module: {
    rules: [{
      test: /\.scss/,
      loader: 'import-glob-loader'
    }]
  }
})

/**
 * The public path is set to "dist"
 */
mix.setPublicPath('dist/');

/**
 * Compile scripts and version them
 */
mix.js('./assets/scripts/main.js', 'dist/scripts/')
   .version();

/**
 * Compile styles and version them
 */
mix.sass('./assets/styles/main.scss', 'dist/styles/')
   .version();

// Full API
// mix.js(src, output);
// mix.extract(vendorLibs);
// mix.sass(src, output);
// mix.less(src, output);
// mix.combine(files, destination);
// mix.copy(from, to);
// mix.minify(file);
// mix.sourceMaps(); // Enable sourcemaps
// mix.version(); // Enable versioning.
// mix.disableNotifications();
// mix.setPublicPath('path/to/public'); <-- Useful for Node apps.
// mix.webpackConfig({}); <-- Override webpack.config.js, without editing the file directly.
