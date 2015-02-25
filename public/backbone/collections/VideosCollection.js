var Videos = Backbone.Collection.extend({

  model: VideoModel,

  initialize: function(){
  	console.log('Videos collection initializing');
  }

});