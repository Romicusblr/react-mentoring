/* eslint-disable global-require */
const express = require('express');
const path = require('path');

const app = express();
const PORT = 8000;

if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack');
  const webpackConfig = require('../webpack/webpack.development');
  const compiler = webpack(webpackConfig);

  app.use(require('webpack-dev-middleware')(compiler));
  app.use(require('webpack-hot-middleware')(compiler));
} else {
  app.use(express.static('build'));
}

app.get('*', (req, res) => res.sendFile(path.resolve('build', 'index.html')));

const server = require('http').createServer(app);

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server is running on port %s', PORT);
});
