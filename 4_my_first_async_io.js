var fs = require('fs');

var callback = function(data){
  console.log(data.split("\n").length-1);
};
fs.readFile(process.argv[2], 'utf8', function(err, data){
  callback(data);
})
