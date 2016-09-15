var videoArray = [];
var host = document.location.origin;
var socket = io.connect(host); 
$(document).ready(function(){
	socket.on('connect', function(data){
		console.log('client connected');
	});

	// $('body').on('click', 'li', function(){
	// 	socket.emit('shell', {key:$(this).text()});
	// });

	var macUrl = "http://10.0.1.18:8000/files";
	var piUrl = "http://192.168.1.116:8000/files";
	var controller = {
		forward: '^[[C',
		rewind: '^[[D',
		play: 'p',
		quit: 'q'
	}
	$(".play").on('click', function(){
		$(this).toggleClass('mdi-av-play-circle-outline mdi-av-pause-circle-outline')
		console.log('toggle!');
	})
	$(".remote-button").on('click', function(){
		var action = $(this).data('command');
		socket.emit('remote', {command: controller[action]});
	});

	$.get(piUrl, function(data){
		// reading a directory, populating videoArray

		for (var i = 0; i < data.length; i++) {
			debugger;
			if( data[i].indexOf('DS') < 0 && data[i].indexOf('.')>0){
				videoArray.push({
					title: data[i]
				})
			}
		};
		var videos = new Videos(videoArray);
		var app = new AppModel({library: videos});
		var appView = new AppView({model: app});
		$('#container').html(appView.render());

	});
});
