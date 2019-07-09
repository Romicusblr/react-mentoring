const express = require("express");
const app = express();
app.use(express.static("public"));

const server = require("http").createServer(app);

server.listen(8000);