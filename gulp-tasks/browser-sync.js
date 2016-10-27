
var browserSync   = require('browser-sync');


// Configuring the browser-sync plugin
module.exports = function (gulp, plugins) {
  return function () {
    browserSync.init({
      proxy: 'http://localhost:3000'
    });
  };
};
