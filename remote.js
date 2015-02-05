$(document).ready(function(){
	var host = document.location.origin;
	var socket = io.connect(host); 
	socket.on('connect', function(data){
		console.log('connected');

		$('#cast').click(function(){
			socket.emit('shell');
		})

	});
})
