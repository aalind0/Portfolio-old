
var gulpjade      = require('gulp-jade');


// Compiling .jade files
module.exports = function (gulp, plugins) {
  return function () {
    gulp.src('jade/views/**/*.jade')
		.pipe(plugins.plumber())
    .pipe(gulpjade({
      pretty: false
    }))
    .pipe(gulp.dest('public'));
  };
};
