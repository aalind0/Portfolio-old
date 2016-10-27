
// Moving fonts
module.exports = function (gulp, plugins) {
  return function () {
    return gulp.src('fonts/*')
    .pipe(gulp.dest('public/fonts'));
  };
};
