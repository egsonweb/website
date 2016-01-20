import webpack from 'webpack'
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
    ? ['webpack-hot-middleware/client?path=/__webpack_hmr', 'bootstrap-loader', APP_ENTRY_PATH]
    : ['bootstrap-loader/extractStyles', APP_ENTRY_PATH],
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
  new webpack.DefinePlugin(config.globals),
  new webpack.optimize.OccurrenceOrderPlugin(),
  // new webpack.optimize.DedupePlugin(),
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
        warnings: false,
        minify: true
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
    'importLoaders=1',
    'localIdentName=[name]__[local]___[hash:base64:5]'
  ].join('&');

webpackConfig.module.loaders.push({
  test: /\.scss$/,
  include: /src/,
  loaders: [
    'style',
    cssLoader,
    'sass?sourceMap'
  ]
});

// Don't treat global SCSS as modules
webpackConfig.module.loaders.push({
  test: /\.scss$/,
  exclude: /src/,
  loaders: [
    'style',
    'css',
    'sass?sourceMap'
  ]
});

// Don't treat global, third-party CSS as modules
webpackConfig.module.loaders.push({
  test: /\.css$/,
  exclude: /src/,
  loaders: [
    'style',
    'css',
  ]
});

webpackConfig.sassLoader = {
  includePaths: paths.client(config.dir_styles)
};


// File loaders
webpackConfig.module.loaders.push(
  { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
  { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
  { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
  { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' },
  { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file?limit=10000' },
  { test: /\.(png|jpg|gif|jpeg)$/, loader: 'url?limit=10000'}
);


if (!__DEV__) {
  webpackConfig.module.loaders.filter(loader =>
    Array.isArray(loader.loaders)
  ).forEach(loader => {
    const [first, ...rest] = loader.loaders
    loader.loader = ExtractTextPlugin.extract(first, rest.join('!'))
    delete loader.loaders
  })

  webpackConfig.plugins.push(
    new ExtractTextPlugin('app.bundle.css')
  );
}

export default webpackConfig;
