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
    'print': false,
    'glyphicons': false,

    'scaffolding': true,
    'type': true,
    'code': false,
    'grid': true,
    'tables': false,
    'forms': true,
    'buttons': true,

    'component-animations': true,
    'dropdowns': true,
    'button-groups': false,
    'input-groups': false,
    'navs': true,
    'navbar': true,
    'breadcrumbs': false,
    'pagination': false,
    'pager': false,
    'labels': false,
    'badges': false,
    'jumbotron': false,
    'thumbnails': true,
    'alerts': true,
    'progress-bars': false,
    'media': true,
    'list-group': true,
    'panels': false,
    'wells': false,
    'responsive-embed': false,
    'close': false,

    'modals': false,
    'tooltip': false,
    'popovers': false,
    'carousel': false,

    'utilities': true,
    'responsive-utilities': true
  }
};
