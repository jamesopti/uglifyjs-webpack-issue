const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/main.js',

  mode: 'development',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      { test: /\.css$/, use: [ { loader: 'style-loader' }, { loader: 'css-loader' } ] },
      { test: [/\/src\/(?:.*)\.js$/], use: { loader: 'babel-loader' } },
    ]
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          mangle: false,
          keep_classnames: true,
          keep_fnames: true,
        },
      }),
    ]
  }
};
