var LibraryEntryView = Backbone.View.extend({
	tagName: 'li',
	className: "purple btn-large waves-effect waves-ripple video",
	// className: " waves-effect waves-ripple video",
	// this.model.get("t")
	template: _.template('<%= title %>'),
	events: {
		click: function(){
			var data = {title: this.model.attributes.title};
			console.log('sending this to server', data)
			socket.emit('shell', data)
		}
	},
	render: function(){
		return this.$el.html(this.template(this.model.attributes));
	}
})