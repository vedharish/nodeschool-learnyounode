var helper_module = require('./6_helper_module.js');

var callback = function(err, return_array){
  for(var key in return_array)
    console.log(return_array[key]);
}
helper_module(process.argv[2], process.argv[3], callback)
