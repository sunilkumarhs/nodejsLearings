const cluster = require("node:cluster");
const http = require("node:http");
const OS = require("node:os");

console.log(OS.cpus().length);

if (cluster.isMaster) {
  console.log(`Master Process ${process.pid} is running`);
  cluster.fork();
  cluster.fork();
} else {
  console.log(`Worker ${process.pid} is running`);
  const server = http.createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Home Page");
    } else if (req.url === "/slowPage") {
      for (let i = 0; i < 6000000000; i++) {}
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Slow Page");
    }
  });
  server.listen(8000, () => console.log("Server is running in port 8000"));
}
