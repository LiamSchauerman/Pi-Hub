$(document).ready(function(){
	var host = document.location.origin;
	var socket = io.connect(host); 
	socket.on('connect', function(data){
		console.log('connected');

		$('#cast').click(function(){
			var data = {};
			data.command = $("#command").val();
			data.args = $("#arguments").val().split(" ");
			socket.emit('shell', data);
		})

	});
})
