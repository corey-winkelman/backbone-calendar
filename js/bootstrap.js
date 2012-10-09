define( ['backbone', 'routers/mainRouter', 'namespaces'],
function ( Backbone, MainRouter ) {

	'use strict';

	var init = function () {
		
		// Create Backbone Router
		new Calendar.Routers.Main();
		Backbone.history.start();
	};

	return {
		initialize: init
	};

});