var port = 8000;
var express = require("express")
var app = express();
var server = require("http").createServer(app);
var url = require("url");
var fs = require("fs");
var spawn = require('child_process').spawn
var io = require("socket.io").listen(server);
var omx = require('omxcontrol')


app.use(express.static(__dirname + '/'))

server.listen(port, function(){
	console.log('Listening on port ' + port);
});

// UTILITY
function run_shell(cmd, args, cb, end) {
    var spawn = require('child_process').spawn,
        child = spawn(cmd, args),
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
		if(data.url.indexOf("youtube") >= 0){
			var runShell = new run_shell('youtube-dl',[data.url],
			    function (me, buffer) {
			        me.stdout += buffer.toString();
			        socket.emit("loading",{output: me.stdout});
			        console.log(me.stdout);
			     },
			    function () {
			        //child = spawn('omxplayer',[id+'.mp4']);
			        // omx.start(id+'.mp4');
			        console.log("ending")
			    });
		} else {
			console.log("newUrl event heard");
			console.log("we should redirect to "+data.url);
			// var command = "chromium "+ data.url;
			var runShell = new run_shell('chromium', [data.url], 
				function (me, buffer) {
					console.log("me", me.stdout);
				    me.stdout += buffer.toString();
				    socket.emit("loading",{output: me.stdout});
				    console.log(me.stdout);
				 },
				function () {
					var spawn = require("child_process").spawn("omxplayer Kobe\ Bryant\ -\ Left\ Handed\ 3\ Pointer-4MuvPhGs6-4.mp4")
					console.log("Kobe\ Bryant\ -\ Left\ Handed\ 3\ Pointer-4MuvPhGs6-4.mp4")
				})
			
		}
	});
})

