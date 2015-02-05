$(document).ready(function(){
	var host = document.location.origin;
	var socket = io.connect(host); 
	socket.on('connect', function(data){
		console.log('connected');

		$('#cast').click(function(){
			data.command = $("#command").val();
			data.args = $("#arguments").val();
			socket.emit('shell', data);
		})

	});
})
