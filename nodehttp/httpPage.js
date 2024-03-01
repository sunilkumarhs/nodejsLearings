const http = require("node:http");
const httpRoute = require("./routes");

const server = http.createServer(httpRoute);

server.listen(3000, () => {
  console.log("Server as started in port-3000");
});
