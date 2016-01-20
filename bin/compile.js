require('babel-core/register');

const webpackConfig = require('../webpack.config').default;
const compiler = require('webpack')(webpackConfig);

compiler.run(function(err, stats) {
  const jsonStats = stats.toJson()
  if (err) {
    console.log('Webpack compiler encountered a fatal error', err);
    process.exit(1);
  } else if (jsonStats.errors.length > 0) {
    console.log('Webpack compiler encountered errors');
    process.exit(1);
  } else if (jsonStats.warnings.length > 0) {
    console.log('Webpack compiler encountered warnings');
    process.exit(1);
  } else {
    console.log('No errors or warnings encountered');
  }
});
