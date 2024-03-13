const http = require("node:http");
const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("The middleware called");
  next();
});

app.use((req, res, next) => {
  console.log("The another middleware called");
  res.send("<h1>The Express.js is running </h1>");
});

const server = http.createServer(app);

server.listen(3000, () => {
  console.log("Server as started in port-3000");
});
