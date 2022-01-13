require("dotenv").congig();
const express = require("express");
const cors = require("cors");

const server = express();

server.use(express.json());
server.use(cors());

server.get("/api/hello", (req, res) => {
  res.json({ message: "api is working" });
});

server.use("*", (req, res, next) => {
  res.send(`<h1>Hello, there!</h1>`);
});

server.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
  });
});

console.log(process.env.PORT, process.env.NODE_ENV);
