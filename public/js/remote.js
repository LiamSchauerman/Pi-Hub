$(document).ready(function(){
	var host = document.location.origin;
	var socket = io.connect(host); 
	socket.on('connect', function(data){
		console.log('connected -client');


	});
	$('body').on('click', 'li', function(){
		socket.emit('shell', {key:$(this).text()});
	})
	socket.on('resp', function(data){
		console.log(data);
	})
});
var videoArray = [
	{
		title: "Top Gun",
		duration: "2 hours 25 minutes",
		genre: "Action"
	},
	{
		title: "The Rock",
		duration: "1 hour 58 minutes",
		genre: "Action"
	}
]

