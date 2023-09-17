
const fs = require("fs");


const requestHandler =  (req, res) => {
    //console.log(req.url, req.method,req.headers)
  
    const url = req.url;
    const method = req.method;
  
    if (url === "/") {
      res.setHeader("Content-Type", "text/html");
      res.write("<html>");
      res.write("<head><title>Input Form</title></head>");
      res.write(
        '<body><form action="/message" method="POST"><input type="text" name="message"/><button type "submit">Send</button></form></body>'
      );
      res.write("</html>");
      return res.end();
    }
    //ดักจับด้วยว่าต้อมาจาก post ไม่ใช่ get
    if (url === "/message" && method === "POST") {
      const body = [];
      //ส่งค่า data มาดู chunk
      req.on("data", (chunk) => {
        console.log(chunk);
        body.push(chunk);
      });
  
      req.on("end", () => {
        const parsendBody = Buffer.concat(body).toString();
        const message = parsendBody.split("=")[1];
        fs.writeFileSync("message.txt", message, (err) => {
          res.statusCode = 302;
          res.setHeader("Location", "/");
          return res.end();
        });
      });
    }
  
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>This Page create from my Node.js Server</h1></body>");
    res.write("</html>");
    res.end();
  }

  exports.handler = requestHandler
  exports.somMsg = 'Some message sent here'