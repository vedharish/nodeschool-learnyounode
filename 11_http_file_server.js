var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  file_stream = fs.createReadStream(process.argv[3]);
  file_stream.pipe(res);
})
server.listen(process.argv[2])
