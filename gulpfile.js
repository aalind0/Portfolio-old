
var gulp        = require('gulp'),
    plugins     = require('gulp-load-plugins')(),
    browserSync = require('browser-sync'),
    runSequence = require('run-sequence');


function getTask(name) {
  return require('./gulp-tasks/' + name)(gulp, plugins);
}


// Calling the tasks
gulp.task('html-builder', getTask('html-builder'));
gulp.task('css-builder', getTask('css-builder'));
gulp.task('img-mover', getTask('img-mover'));
gulp.task('fonts-mover', getTask('fonts-mover'));
gulp.task('browser-sync', getTask('browser-sync'));


// Define the default task => npm run watch
gulp.task('default', function () {
  runSequence (
    'css-builder',
    ['img-mover', 'fonts-mover'],
    'browser-sync',
    'watch'
  );
});


// Build task, RUN this task before deploying your app => npm run build
gulp.task('build', function () {
  runSequence (
    'css-builder',
    ['img-mover', 'fonts-mover']
  );
});


// FTP Build task => npm run build-ftp
gulp.task('build-ftp', function () {
  runSequence (
    ['html-builder', 'css-builder'],
    ['img-mover', 'fonts-mover']
  );
});


// Watch task
gulp.task('watch', function() {
  gulp.watch('stylesheets/**/*.styl', ['css-builder']);
  gulp.watch('./public/js/bundle.js').on('change', browserSync.reload);
  gulp.watch('jade/views/**/*.jade').on('change', browserSync.reload);
});
