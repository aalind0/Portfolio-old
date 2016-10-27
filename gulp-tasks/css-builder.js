
var stylus        = require('gulp-stylus'),
    bubbly        = require('bubbly-grid-stylus'),
    rupture       = require('rupture'),
    gulprename    = require('gulp-rename'),
    combineMq     = require('gulp-combine-mq'),
    // PostCSS :
    gulppostcss   = require('gulp-postcss'),
    mqpacker      = require('css-mqpacker'),
    pxToRem       = require('postcss-pxtorem'),
    cssnano       = require('cssnano'),
    rucksack      = require('rucksack-css'),
    browserSync   = require('browser-sync');

//PostCSS plugins
var processors = [
  rucksack,
  pxToRem({ //if you want to have a property ignored, use a capital in the px unit declaration, e.g, border-width: 1Px;
    rootValue: 16,
    unitPrecision: 5,
    propWhiteList: [],
    mediaQuery: true,
    replace: true
  }),
  mqpacker,
  cssnano({
    calc: {
      preserve: true // so your layout doesn't get messed up in IE
    },
    autoprefixer: {
      add: true,
      browsers: 'last 2 versions'
    }
  })
];

// Compiling .styl files
module.exports = function (gulp, plugins) {
  return function () {
    gulp.src('stylesheets/style.styl')
    .pipe(plugins.plumber())
    .pipe(stylus({
      use:[bubbly(),rupture()]
    }))
    .pipe(combineMq()) // really useful plugin that combines matching media queries into one
    .pipe(gulppostcss(processors))
    .pipe(gulprename({ suffix: '.min' }))
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.stream());
  };
};
