var http = require("http");

var jsonFormatter = require("./transfromation-lib.js");

http.createServer(function (req, res) {
  var body = "";
  req.on('data', function (chunk) {
    body += chunk;
  });
  req.on('end', function () {
    res.writeHead(200, {"Content-Type": "application/json"});
    res.end(jsonFormatter.buildClientJSON(body));

  });
}).listen(8080);



