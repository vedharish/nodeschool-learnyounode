var fs = require('fs');

fs.readdir(process.argv[2], function (err, lines){
  for(key in lines){
    dir_array = lines[key].split('.');
    if( dir_array.length !== 1 && dir_array[dir_array.length-1] === process.argv[3] )
      console.log(lines[key]);
  }
});
