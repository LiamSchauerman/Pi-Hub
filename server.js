var port = 8000;
var express = require("express")
var app = express();
var url = require("url");
var fs = require("fs");
var spawn = require('child_process').spawn

var server = require("http").createServer(app);
var io = require("socket.io").listen(server);


app.use(express.static(__dirname + '/public'))

server.listen(port, function(){
	console.log('Listening on port ' + port);
});

// /files should send the client a list of files inside video directory
app.get('/files', function (req, res) {

	var piFolder = '/home/pi/sync';
	var devFolder = '/Users/liam/Desktop/paris'
	
	console.log('inside /files')
	console.log(req.url)

	// change this filepath accordingly 
	fs.readdir(devFolder, function(err, files){
		if( err ) throw err;
		console.log(files);
		res.send(files);
	})
});

// SOCKET EVENTS

io.sockets.on('connection', function(socket){
	socket.on('shell', function(data){
		// var child = spawn("omxplayer", ["Kobe\ Bryant\ -\ Left\ Handed\ 3\ Pointer-4MuvPhGs6-4.mp4"]);
		// var child = spawn(data.command, data.args);
		console.log(data);
		console.log('inside "shell" listener')
		// socket.emit('resp', data);
	});
})

