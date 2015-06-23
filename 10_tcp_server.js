var net = require('net');
var server_callback = function(socket){
  var date = new Date();
  var year = date.getFullYear().toString();
  var month = (date.getMonth() + 1).toString();
  var day = date.getDate().toString();
  var hours = date.getHours().toString();
  var minutes = date.getMinutes().toString();

  if(month.length === 1) month = "0"+month;
  if(day.length === 1) day = "0"+day;
  if(hours.length === 1) hours = "0"+hours;
  if(minutes.length === 1) minutes = "0"+minutes;
  socket.end(year+"-"+month+"-"+day+" "+hours+":"+minutes+"\n");
};

var server = net.createServer(server_callback);
server.listen(process.argv[2]);
