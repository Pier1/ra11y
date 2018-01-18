'use strict';
(() => {
  module.exports = (gulp, plugins, config) => {
    return () => {
      return gulp.watch(`${config.srcPath}/**/*.js`, ['uglify']);
    };
  };
})();
