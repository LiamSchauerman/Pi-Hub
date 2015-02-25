var videoArray = [];
var host = document.location.origin;
var socket = io.connect(host); 
$(document).ready(function(){
	socket.on('connect', function(data){
		console.log('connected -client');
	});

	// $('body').on('click', 'li', function(){
	// 	socket.emit('shell', {key:$(this).text()});
	// });
	socket.on('resp', function(data){
		console.log(data);
	});
	$.get("http://10.6.20.253:8000/files", function(data){
		// reading a directory, populating videoArray
		for (var i = 0; i < data.length; i++) {
			if( data[i].indexOf('DS') < 0){
				if(data[i].indexOf('.') >=0){
					videoArray.push({
						title: data[i].substring(0, data[i].indexOf('.'))
					})
				} else {
					videoArray.push({
						title: data[i]
					})
				}
			}
		};
		var videos = new Videos(videoArray);
		var app = new AppModel({library: videos});
		var appView = new AppView({model: app});
		$('#container').html(appView.render());

	});
});

var videoArrayTest = [
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
