'use strict';
const gulp = require('gulp');

const plugins = require('gulp-load-plugins')({ DEBUG: false, pattern: '*' });
const tasksPath = './gulp-tasks';

const config = {
  buildPath: './dist',
  srcPath: './src'
};

function getTask(task, taskParams) {
  return require('./gulp-tasks/' + task)(gulp, plugins, config, taskParams);
}

gulp.task('default', getTask('default'));

gulp.task('build', getTask('build'));
gulp.task('clean', getTask('clean'));
gulp.task('uglify', getTask('uglify'));
gulp.task('watch', getTask('watch'));
