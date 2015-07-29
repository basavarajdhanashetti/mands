var http = require("http");

http.createServer(function (req, res) {
  var body = "";
  req.on('data', function (chunk) {
    body += chunk;
  });
  req.on('end', function () {
    var jsonObj = JSON.parse(body);

    var newJsonObj =  JSON.stringify({ 
        details:{ 
        	desc: 'General Details',
            name: jsonObj.name,
            age: jsonObj.age
        }, 
        adress: {
            line1: jsonObj.line1,
            line2: jsonObj.line2,
            city: jsonObj.city
        }, 
        country: jsonObj.country
      });
    
    res.writeHead(200, {"Content-Type": "application/json"});
   
    res.end(newJsonObj);
  });
}).listen(8080);



