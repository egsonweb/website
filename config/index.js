import path from 'path'

let config = {
  env : process.env.NODE_ENV || 'development',

  // Project Structure
  path_base  : path.resolve(__dirname, '../'),
  dir_client : 'src',
  dir_dist   : 'dist',
  dir_styles : 'styles',

  // Server Configuration
  server_host : 'localhost',
  server_port : process.env.PORT || 3000,

  // Compiler Configuration
  compiler_css_modules: true,
  compiler_devtool: '',
  compiler_public_path: '/static/',
  compiler_vendor: [
    'history',
    'react',
    'react-redux',
    'react-router',
    'react-slick',
    'react-helmet',
    'react-ga',
    'react-tap-event-plugin',
    'redux',
    'redux-thunk',
    'redux-simple-router',
    'scroll-behavior'
  ]
};

config.globals = {
  'process.env'  : {
    'NODE_ENV' : JSON.stringify(config.env)
  },
  'NODE_ENV'     : config.env,
  '__DEV__'      : config.env === 'development',
  '__PROD__'     : config.env === 'production'
}

config.paths = (() => {
  const resolve = path.resolve

  const base = (...args) =>
    resolve.apply(resolve, [config.path_base, ...args])

  return {
    base   : base,
    client : base.bind(null, config.dir_client),
    dist   : base.bind(null, config.dir_dist)
  }
})()

export default config;
