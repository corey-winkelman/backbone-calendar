define(['backbone'], function ( Backbone ) {

	Calendar.Models.Day = Backbone.Model.extend({

		defaults: {
			day: null,
			date: null
		}

	});

	return Calendar.Models.Day;

});