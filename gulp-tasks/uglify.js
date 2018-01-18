'use strict';
(() => {
  module.exports = (gulp, plugins, config) => {
    return () => {
      plugins.vinylFs.src([`${config.srcPath}/**/*.js`])
        .pipe(plugins.changed(config.buildPath))
        .pipe(plugins.vinylFs.dest(config.buildPath, { overwrite: true }));

      return gulp.src([`${config.srcPath}/**/*.js`, `!${config.srcPath}/**/*.min.js`])
        .pipe(plugins.changed(config.buildPath))
        .pipe(plugins.plumber({
          errorHandler: plugins.notify.onError('Error: <%= error.message %>')
        }))
        .pipe(plugins.rename({ suffix: '.min' }))
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.babel({
          presets: [
            ['env', { 'modules': false }]
          ],
        }))
        .pipe(plugins.uglify())
        .pipe(plugins.size(config.sizeOptions))
        .pipe(plugins.sourcemaps.write('.', { sourceRoot: '.' }))
        .pipe(gulp.dest(config.buildPath))
      ;
    };
  };
})();
