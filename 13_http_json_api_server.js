var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res){
  res.writeHead(200, {"Content-Type": "application/json"});
  request_url = url.parse(req.url.toString(), true);
  if(request_url["pathname"] === "/api/parsetime"){
    var date = new Date(request_url.query["iso"]);
    out_date = {hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds()}
    res.write(JSON.stringify(out_date));
  }else if(request_url["pathname"] === "/api/unixtime"){
    var date = new Date(request_url.query["iso"]);
    out_date = {unixtime: date.getTime()}
    res.write(JSON.stringify(out_date));
  }else{
    res.write("Whoa!");
  }
  res.end();
});
server.listen(process.argv[2])
