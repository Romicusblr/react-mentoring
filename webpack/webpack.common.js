const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const BUILD_DIR = path.join(__dirname, '../build');
const APP_DIR = path.join(__dirname, '../src');

module.exports = {
  entry: [`${APP_DIR}/index.jsx`],
  output: {
    filename: '[name].[hash].js',
    path: BUILD_DIR,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: `${APP_DIR}/index.html`,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
      },
    },
    {
      test: /\.css$/,
      use: [{
        loader: MiniCssExtractPlugin.loader,
        options: {
          hmr: process.env.NODE_ENV === 'development',
        },
      }, 'css-loader'],
    },
    {
      test: /\.(png|jpg)$/,
      use: {
        loader: 'url-loader',
      },
    },
    ],
  },
};
