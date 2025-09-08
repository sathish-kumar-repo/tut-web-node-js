const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
  process.exit(); // Stop Event 
});

server.listen(3000);
