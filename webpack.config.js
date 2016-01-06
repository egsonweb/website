var path = require('path');
var webpack = require('webpack');
var merge = require('merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var webpackCfg = {
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};

if (process.env.NODE_ENV === 'production') {
  webpackCfg = merge(webpackCfg, {
    devtool: "source-map",
    entry : [
      './src/client/index.js',
      'bootstrap-sass!./src/assets/theme/bootstrap-sass.extract-text-webpack-plugin.config.js',
      'font-awesome-webpack!./src/assets/theme/font-awesome.config.js',
    ],

    module: {
      loaders: [
        { test: /bootstrap-sass\/assets\/javascripts\//, loader: 'imports?jQuery=jquery' },
        { test: /\.js$/, loader: 'react-hot!babel', include: path.join(__dirname, 'src')},
        { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
        { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
        { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
        { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
        { test: /\.(png|jpg|gif|jpeg)$/, loader: 'url-loader?limit=8192'}
      ]
    },

    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production')
        }
      }),
      new ExtractTextPlugin("bundle.css"),
      new webpack.optimize.UglifyJsPlugin({minimize: true})
    ]

  });
} else {
  webpackCfg = merge(webpackCfg, {
    cache: true,

    devtool: 'cheap-module-source-map',

    entry: [
      'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
      'bootstrap-sass!./src/assets/theme/bootstrap-sass.config.js',
      'font-awesome-webpack!./src/assets/theme/font-awesome.config.js',
      './src/client/index.js'
    ],

    module: {
      loaders: [
        { test: /bootstrap-sass\/assets\/javascripts\//, loader: 'imports?jQuery=jquery' },
        { test: /\.js$/, loader: 'react-hot!babel', include: path.join(__dirname, 'src')},
        { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
        { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
        { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
        { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
        { test: /\.(png|jpg|gif|jpeg)$/, loader: 'url-loader?limit=8192'}
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
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}

module.exports = webpackCfg;
