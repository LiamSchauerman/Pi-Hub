// use raspberry pi to host server that loads webpages. videos, etc

// server redirects to the webpage sent on the socket event
var port = 8000;
var http = require("http");
var url = require("url");
var node_static = require("node-static");

var static_files = new node_static.Server(__dirname);
var server = http.createServer(handleHTTP).listen(port);

var io = require("socket.io");


io.listen()
// var express = require("express");
// var socket = require('socket.io')

// app = express();
// app.engine('html', require('ejs').renderFile);

// app.set("views", __dirname);

// app.get('/', function(req,res){
// 	res.render('remote.html');
// })

// app.set("port", 8000);
// app.listen(app.get("port"), function(){
// 	console.log("Node server listening on port", app.get("port"))
// })
// socket.emit("redirect", function(url){
// 	console.log("redirect event emitted")
// })

