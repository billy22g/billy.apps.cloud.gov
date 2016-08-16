var http = require('http');
var os = require('os');
var port = process.env.PORT || 5000;

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('What up y\'all this is Billy and I have an app on cloud.gov' + '\n');
}).listen(port, function() {
  console.log("Listening on " + port);
});
