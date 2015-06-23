var http = require('http')

var callback = function(response){
  response.on("data", function(data){
    console.log(data.toString());
  });

  response.on("err", function(err){
  });

  response.on("end", function(end){
  });
}
http.get(process.argv[2], callback)
