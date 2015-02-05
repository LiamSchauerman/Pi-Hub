$(document).ready(function(){
	var host = document.location.origin;
	var socket = io.connect(host); 
	socket.on('connect', function(data){
		console.log('connected')
		$('#cast').click(function(){
			var url = $("#urlInput").val();
			console.log(url);
			socket.emit('newUrl', {url:url});
		})
	});
})
