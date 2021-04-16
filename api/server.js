const express = require("express");
const router = require("./router");

const server = express();

server.use(express.json());
server.use("/api/recipes", router);

server.use("*", (req, res) => {
    res.status(404).json("Wrong Url!");
});

module.exports = server;