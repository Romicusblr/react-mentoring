const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const BUILD_DIR = path.join(__dirname, '../build');
const APP_DIR = path.join(__dirname, '../src');

module.exports = {
  entry: [`${APP_DIR}/index.jsx`],
  output: {
    filename: '[name].[hash].js',
    path: BUILD_DIR,
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${APP_DIR}/index.html`,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
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
      exclude: /\.module\.css$/,
      use: [{
        loader: MiniCssExtractPlugin.loader,
        options: {
          hmr: process.env.NODE_ENV === 'development',
        },
      }, 'css-loader'],
    },
    {
      test: /\.module\.css$/,
      loader: [{
        loader: MiniCssExtractPlugin.loader,
        options: {
          hmr: process.env.NODE_ENV === 'development',
        },
      },
      {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: process.env.NODE_ENV === 'development' ? '[folder]__[local]' : '[local]__[hash:base64:5]',
          },
        },
      },
      'postcss-loader',
      ],
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
