const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
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

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Node Js Tutorial</title></head>");
  res.write("<body><h1>Hello from Node.js Server!</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
