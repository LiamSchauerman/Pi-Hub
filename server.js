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

// UTILITY
function run_shell(cmd, args, cb, end) {
    var spawn = require('child_process').spawn,
        child = spawn(cmd, args),
        me = this;
    child.stdout.on('data', function (buffer) { cb(me, buffer); });
    child.stdout.on('end', end);
}



// SOCKET EVENTS

io.sockets.on('connection', function(socket){
	socket.on('newUrl', function(data){
		var child = spawn("omxplayer Kobe\ Bryant\ -\ Left\ Handed\ 3\ Pointer-4MuvPhGs6-4.mp4")

		// var runShell = new run_shell('youtube-dl',[data.url],
		//     function () {
		//         //child = spawn('omxplayer',[id+'.mp4']);
		//         // omx.start(id+'.mp4');
		//         spawn()
		//         console.log("ending")
		//     });
		// console.log("newUrl event heard");
		// console.log("we should redirect to "+data.url);
		// // var command = "chromium "+ data.url;
		// run_shell('omxplayer', ["Kobe\ Bryant\ -\ Left\ Handed\ 3\ Pointer-4MuvPhGs6-4.mp4"], 
		// 	function (me, buffer) {
		// 		console.log("me", me.stdout);
		// 	    me.stdout += buffer.toString();
		// 	    socket.emit("loading",{output: me.stdout});
		// 	    console.log(me.stdout);
		// 	 },
		// 	function () {
		// 		var spawn = require("child_process").spawn("omxplayer Kobe\ Bryant\ -\ Left\ Handed\ 3\ Pointer-4MuvPhGs6-4.mp4")
		// 		console.log("Kobe\ Bryant\ -\ Left\ Handed\ 3\ Pointer-4MuvPhGs6-4.mp4")
		// 	})
			
		// }
	});
})

