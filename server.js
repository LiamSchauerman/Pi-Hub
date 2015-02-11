var port = 8000;
var express = require("express")
var app = express();
var url = require("url");
var fs = require("fs");
var spawn = require('child_process').spawn

var server = require("http").createServer(app);
var io = require("socket.io").listen(server);


// CONFIG
app.use(express.static(__dirname + '/'))

server.listen(port, function(){
	console.log('Listening on port ' + port);
});

app.get('/', function (req, res) {
  res.sendfile(__dirname+'/remote.html');
});

// SOCKET EVENTS

io.sockets.on('connection', function(socket){
	socket.on('shell', function(data){
		// var child = spawn("omxplayer", ["Kobe\ Bryant\ -\ Left\ Handed\ 3\ Pointer-4MuvPhGs6-4.mp4"]);
		var child = spawn(data.command, data.args);
	});
})

