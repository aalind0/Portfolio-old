
// Moving img
module.exports = function (gulp, plugins) {
  return function () {
    return gulp.src('images/*')
    .pipe(gulp.dest('public/images'));
  };
};
