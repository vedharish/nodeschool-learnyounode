var http = require('http')

var callback = function(response){
  stream  = ""
  response.on("data", function(data){
    stream += data.toString();
  });

  response.on("err", function(err){
  });

  response.on("end", function(end){
    console.log(stream.length);
    console.log(stream);
  });
}
http.get(process.argv[2], callback)
