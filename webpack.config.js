const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/styles.scss',

  mode: 'development',

  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        include: [
          path.resolve(__dirname, './static/img'),
        ],
        use: {
          loader: 'file-loader',
          options: {
            name: '[name]-[hash].[ext]',
          },
        },
      },
      {
        test: /\.svg$/,
        use: {
          loader: 'svg-inline-loader',
          options: {
            name: '[name]-[hash].[ext]',
          },
        },
      },
      {test: /\/src\/js\/(?:.*)\.css$/, use: [{loader: 'style-loader'}, {loader: 'css-loader'}]},
      {
        test: [/\.scss$/, /\.sass$/],
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'resolve-url-loader',
            options: {
              debug: true,
              root: path.join(__dirname, './static/img'),
              includeRoot: true,
              absolute: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              outputStyle: 'compressed',
              sourceMap: true,
              includePaths: [
                './src',
              ],
            },
          },
        ],
      },
    ],
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/css/',
  },

  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name]-[chunkhash].css',
      chunkFilename: '[name]-[chunkhash].css', // Ensure each chunk has a unique id
    }),
  ],

  devtool: 'source-map'
};
