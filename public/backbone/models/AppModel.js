var AppModel = Backbone.Model.extend({
	initialize: function(params){
		this.set('VideoList', params.library)

		console.log("Our collection of videos, from the AppModel");
		console.log(this.get('VideoList'));
	}
})