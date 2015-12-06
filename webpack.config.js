var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',

  entry: [
  'webpack-hot-middleware/client',
  './src/client/index.js'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'react-hot!babel',
        exclude: /node_modules/,
        include: path.join(__dirname, 'src')
      }
    ]
  },

  plugins : [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
