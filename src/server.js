const express = require("express");
const app = express();
const PORT = 8000;

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const webpackConfig = require('../webpack.config.js')({development: true});
  const compiler = webpack(webpackConfig);

  app.use(require('webpack-dev-middleware')(compiler));
  app.use(require("webpack-hot-middleware")(compiler));
} else {
  app.use(express.static('build'));
}

const server = require("http").createServer(app);

server.listen(PORT, () => {
    console.log("server is running on port %s", PORT);
});
