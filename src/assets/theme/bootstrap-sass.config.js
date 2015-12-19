module.exports = {
  preBootstrapCustomizations: './src/assets/theme/bootstrap-sass.config.scss',
  mainSass: './src/assets/theme/main.scss',
  verbose: false,
  debug: false,
  scripts: {
    'transition': true,
    'collapse': true
  },
  styles: {
    'mixins': true,
    'normalize': true,

    'scaffolding': true,
    'type': true,
    'grid': true,
    'forms': true,
    'buttons': true,

    'component-animations': true,
    'dropdowns': true,
    'button-groups': false,
    'input-groups': false,
    'navs': true,
    'navbar': true,
    'alerts': true,
    'list-group': true,
    'utilities': true,
    'responsive-utilities': true
  }
};
