var fs = require('fs');

bufferRead = fs.readFileSync(process.argv[2]);
var number = bufferRead.toString().split("\n").length;
console.log(number-1);
