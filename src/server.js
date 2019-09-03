/* eslint-disable global-require */
const express = require('express');
const path = require('path');

const app = express();
const PORT = 9000;

if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack');
  const webpackConfig = require('../webpack/webpack.development');
  const compiler = webpack(webpackConfig);
  const devMiddleware = require('webpack-dev-middleware');

  app.use(require('webpack-hot-middleware')(compiler));
  app.use(devMiddleware(compiler, {
    noInfo: true,
    publicPath: compiler.publicPath,
  }));

  app.use('/*', (req, res, next) => {
    const filename = path.join(compiler.outputPath, 'index.html');
    // eslint-disable-next-line consistent-return
    compiler.outputFileSystem.readFile(filename, (err, result) => {
      if (err) {
        return next(err);
      }
      res.set('content-type', 'text/html');
      res.send(result);
      res.end();
    });
  });
}

app.use(express.static('build'));


const server = require('http').createServer(app);

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server is running on port %s', PORT);
});
