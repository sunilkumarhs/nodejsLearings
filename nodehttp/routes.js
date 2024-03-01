const fs = require("node:fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write(
      '<html><head><title>HTTP Page Req and Res</title></head><body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Send</button></form></body></html>'
    );
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
      // console.log(body);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        // console.log(err);
        res.statusCode = 302;
        res.setHeader("Location", "/");
        res.end();
      });
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write(
    "<html><head><title>HTTP Page Req and Res</title></head><body><h1>WELCOME TO NODE HTTP PAGE</h1></body></html>"
  );
  res.end();
};

module.exports = requestHandler;
