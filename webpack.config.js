
var path = require('path');
var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var OccurrenceOrderPlugin = webpack.optimize.OccurrenceOrderPlugin;
var DedupePlugin = webpack.optimize.DedupePlugin;
var plugins = [];

// optimization
if (process.env.NODE_ENV === 'production') { // when set the env to 'production', the 'bundle.js' file will be minified
  plugins.push(new UglifyJsPlugin({
    minimize: true,
    compress: {
      warnings: false
    }
  }),
  new DedupePlugin(),
  new OccurrenceOrderPlugin()
  );
  plugins.push(new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production')
    }
  }));
}

module.exports = {
  entry: ['babel-polyfill', './js/app.jsx'],
  output: {
    path: path.join(__dirname, 'public/js'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /(\.js|\.jsx$)/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },
  plugins: plugins
};
