var AppView = Backbone.View.extend({

	initialize: function(){
		this.list = new LibraryView({collection: this.model.get('VideoList')})
	},
	render: function(){
		return this.$el.html(this.list.$el)
	}
})