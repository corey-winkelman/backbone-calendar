require({
	// Path mappings for module names not found directly under baseUrl
	paths: {
		  jquery: 'vendor/jquery/jquery'
		, underscore: 'vendor/underscore/underscore_amd'
		, backbone: 'vendor/backbone/backbone_amd'
		, localStorage: 'vendor/backbone/backbone.localStorage'
		, text: 'vendor/require/text'
		, handlebars: 'vendor/handlebars/handlebars'
		, models: 'models'
		, views: 'views'
		, collections: 'collections'
		, templates: 'templates'
		, helpers: 'templates/helpers/helpers'
	}
});

define(['jquery', 'bootstrap'], function ( $, Bootstrap ) {

	$(function () {
		
		'use strict';

		// Initialize **Bootstrap**
		new Bootstrap.initialize();
	
	});
	
});