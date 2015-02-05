var port = 8000;
var express = require("express")
var app = express();
var server = require("http").createServer(app);
var url = require("url");
var fs = require("fs");
var spawn = require('child_process').spawn
var io = require("socket.io").listen(server);

app.use(express.static(__dirname + '/'))

server.listen(port, function(){
  console.log('Listening on port ' + port);
});

// ROUTES
app.get('/', function (req, res) {
  res.sendfile(__dirname+'/remote.html');
});

// SOCKET EVENTS

io.sockets.on('connection', function(socket){
	socket.on('newUrl', function(data){
		console.log("newUrl event heard");
		console.log("we should redirect to "+data.url);
	});
})

