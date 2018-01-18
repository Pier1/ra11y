'use strict';
(() => {
  module.exports = (gulp, plugins) => {
    return (done) => {
      return plugins.runSequence('clean', 'uglify', done);
    };
  };
})();
