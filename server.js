const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req, res) => {
  const info = {
    firstName: "Sunil Kumar",
    lastName: "H S",
    eMail: "sunil@gmail.com",
  };

  const title = "Login Page";

  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    //   fs.createReadStream(__dirname + "/index.html").pipe(res);
    //   res.end(JSON.stringify(info));
    // res.end("<h1>Hello Sunil!</h1>")
    let html = fs.readFileSync("./index.html", "utf-8");
    html = html.replace("{{title}}", title);
    res.end(html);
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About Page");
  } else if (req.url === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(info));
  } else {
    res.writeHead(404);
    res.end("Page not found!!");
  }
});
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
