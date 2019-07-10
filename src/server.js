const express = require("express");
const app = express();
const PORT = 8000;
app.use(express.static("public"));

const server = require("http").createServer(app);

server.listen(PORT, () => {
    console.log("server is running on port %s", PORT);
});
