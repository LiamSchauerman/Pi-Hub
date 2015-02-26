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
var piFolder;
app.get('/files', function (req, res) {

	piFolder = '/home/pi/sync/';
	var devFolder = '/Users/liam/Desktop/PiSync/sync'
	
	console.log('inside /files')
	console.log(req.url)

	// change this filepath accordingly 
	fs.readdir(piFolder, function(err, files){
		if( err ) throw err;
		console.log(files);
		res.send(files);
	})
});

// SOCKET EVENTS
var parseTitleForOmx = function(title){
	var parsed = title.replace(/ /g, "\\ ");
	return parsed;
}
io.sockets.on('connection', function(socket){
	socket.on('shell', function(data){

		// var child = spawn("omxplayer", [data.title]);
		// var child = spawn(data.command, data.args);
		console.log(data);
		// var path = "/home/pi/sync/";
		// console.log('inside "shell" listener');
		// var child = spawn("omxplayer", [piFolder+"sopranos.avi"])
		console.log('omxplayer '+ piFolder + parseTitleForOmx(data.title));
		// socket.emit('resp', data);
	});
})

