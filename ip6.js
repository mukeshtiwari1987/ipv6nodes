var http = require('http');

var server = http.createServer(function(request, response){
  response.end("Hello");
})
server.listen(8080);
