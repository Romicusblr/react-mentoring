/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: ['./src/index.jsx'],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../build'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  module: {
    rules: [{
      test: /\.js(x)?$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
      },
    },
    {
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader'],
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
