const path = require('path');
const webpack = require('webpack');

module.exports = {
  cache: true,

  devtool: 'cheap-module-source-map',

  entry: [
    'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
    'bootstrap-sass!./src/assets/theme/bootstrap-sass.config.js',
    'font-awesome-webpack!./src/assets/theme/font-awesome.config.js',
    './src/client/index.js'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },

  module: {
    loaders: [
      { test: /\.js$/, loader: 'react-hot!babel', include: path.join(__dirname, 'src')},
      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
      { test: /\.(png|jpg|gif|jpeg)$/, loader: 'url-loader?limit=8192'},
      { test: /bootstrap-sass\/assets\/javascripts\//, loader: 'imports?jQuery=jquery' }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.json'],
    modulesDirectories: [
      'src',
      'node_modules'
    ]
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
