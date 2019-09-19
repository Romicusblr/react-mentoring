// next.config.js
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
  cssModules: true,
  // cssLoaderOptions: {
  //   importLoaders: 1,
  //   modules: {
  //     localIdentName: '[path][name]__[local]--[hash:base64:5]',
  //   },
  // },
  // {
  //   test: /\.(png|jpg)$/,
  //   use: {
  //     loader: 'url-loader',
  //   },
  // },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(png|jpg)$/,
      use: {
        loader: 'url-loader',
      },
    });

    return config;
  },
});
