var http = require('http');
http.createServer(function (req, res) {
  res.write('Hello World from NodeJS! - Supreeth Betigeri');
  res.end();
}).listen(3000, function(){
 console.log("Server running at port 3000");
});
