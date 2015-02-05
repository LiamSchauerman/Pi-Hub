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

// UTILITY
function run_shell(cmd, args, cb, end) {
    var child = spawn(cmd, args),
        me = this;
    child.stdout.on('data', function (buffer) { cb(me, buffer); });
    child.stdout.on('end', end);
}



// ROUTES
app.get('/', function (req, res) {
  res.sendfile(__dirname+'/remote.html');
});

// SOCKET EVENTS

io.sockets.on('connection', function(socket){
	socket.on('newUrl', function(data){
		console.log("newUrl event heard");
		console.log("we should redirect to "+data.url);
		// var command = "chromium "+ data.url;
		var runShell = new run_shell('chromium', [data.url], 
			function (me, buffer) {
			    me.stdout += buffer.toString();
			    socket.emit("loading",{output: me.stdout});
			    console.log(me.stdout);
			 },
			function () {
				console.log("NewUrl event complete")
			})
	});
})

