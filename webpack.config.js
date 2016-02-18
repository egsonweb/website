import webpack from 'webpack'
import cssnano from 'cssnano'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import config from './config'

const { paths } = config;
const { __DEV__, __PROD__ } = config.globals;
const APP_ENTRY_PATH = paths.client('main.js');

// Base webpack config
const webpackConfig = {
  name: 'client',
  target: 'web',
  devtool: __DEV__ ? 'cheap-module-eval-source-map' : config.compiler_devtool,
  resolve: {
    root: paths.base(config.dir_client),
    extensions: ['', '.js', '.json']
  },
  module: {}
};

// Entry
webpackConfig.entry = {
  app: __DEV__
    ? [APP_ENTRY_PATH, 'bootstrap-loader', 'webpack-hot-middleware/client?path=/__webpack_hmr']
    : [APP_ENTRY_PATH, 'bootstrap-loader/extractStyles'],
  vendor: config.compiler_vendor
};

// Output
webpackConfig.output =  {
  path: paths.base(config.dir_dist),
  filename: '[name].bundle.js',
  publicPath: config.compiler_public_path
};

// Plugins
webpackConfig.plugins = [
  // new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.DefinePlugin(config.globals)
];

if (__DEV__) {
  webpackConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  );
} else if (__PROD__) {
  webpackConfig.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: false
      }
    })
  )
}

// Loaders
webpackConfig.module.loaders = [{
  test: /\.js$/,
  loader: 'babel',
  exclude: /node_modules/,
  query: {
    cacheDirectory: true,
    plugins: ['transform-runtime'],
    presets: __DEV__
      ? ['es2015', 'react', 'stage-0', 'react-hmre']
      : ['es2015', 'react', 'stage-0']
  }
}, {
  test: /\.json$/,
  loader: 'json'
}];


const cssLoader = !config.compiler_css_modules
  ? 'css?sourceMap'
  : [
    'css?modules',
    'importLoaders=2',
    'localIdentName=[name]__[local]___[hash:base64:5]'
  ].join('&');

webpackConfig.module.loaders.push({
  test: /\.scss$/,
  include: /src/,
  loaders: [
    'style',
    cssLoader,
    'sass?sourceMap',
    'postcss'
  ]
});

// Don't treat global SCSS as modules
webpackConfig.module.loaders.push({
  test: /\.scss$/,
  exclude: /src/,
  loaders: [
    'style',
    'css',
    'sass?sourceMap',
    'postcss'
  ]
});

webpackConfig.sassLoader = {
  includePaths: paths.client(config.dir_styles)
};

webpackConfig.postcss = [
  cssnano({
    sourcemap: true,
    autoprefixer: {
      add: true,
      remove: true,
      browsers: ['last 2 versions']
    },
    safe: true,
    discardComments: {
      removeAll: true
    }
  })
];

// File loaders
webpackConfig.module.loaders.push(
  { test: /\.(png|jpg|gif|jpeg)$/, loader: 'url?limit=10000&mimetype=image/png'},
  { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
  { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
  { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
  { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
  { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?limit=10000' }
);

if (!__DEV__) {
  webpackConfig.plugins.push(
    new ExtractTextPlugin('app.bundle.css')
  );
}

export default webpackConfig;
