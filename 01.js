let http = require("http")
http.createServer(function(request, response) {

  //Send the http to the header
  //HTTP status 200, OK
  //content-type is plain text

  response.writeHead(200, {'content-type': 'text/plain'});
  response.end('Hello World\n');
}).listen(8081);

// console to print the message
console.log('Server running at http://127.0.0.1:8081/');
