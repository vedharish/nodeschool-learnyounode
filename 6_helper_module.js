var fs = require('fs');

module.exports = function(directory, extension_filter, callback){
  fs.readdir(directory, function(err, lines){
    var return_array = [];
    for(var key in lines){
      var line_array = lines[key].split(".");
      if(line_array.length !== 1 && line_array[line_array.length-1] === extension_filter){
        return_array[return_array.length] = lines[key];
      }
    };
    callback(err, return_array);
  });
};
