const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/main.js',

  mode: 'production',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [],

  module: {
    rules: [
      { test: /\.css$/, use: [ { loader: 'style-loader' }, { loader: 'css-loader' } ] },
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
    ],
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /([\\\/]node_modules[\\\/]|src[\\\/]js[\\\/]lib)/,
          name: 'vendor',
          chunks: 'initial',
          filename: '[name].js',
        },
      },
    },
  }
};
