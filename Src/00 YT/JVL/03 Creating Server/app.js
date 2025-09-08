const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Enter Form Details</title></head>");
    res.write(`<body>
      <form action='/message' method='POST'>
         <input type='text' name='message'/>
         <input type='submit' value="Send"/>
      </form>
    </body>`);
    // res.write(
    //   '<body><form action="/message" method="POST"><input type="text" name="message" /><input type="submit" value="Send"/></form></body>'
    // );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method == "POST") {
    fs.writeFile("hello.txt", "DUMMY");
    res.setHeader("Location", "/");
    res.statusCode = 302;
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Node Js Tutorial</title></head>");
  res.write("<body><h1>Hello from Node.js Server!</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
