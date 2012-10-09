define(['underscore', 'backbone'], function ( _, Backbone ) {

	Calendar.Events.Config = function () {

		// Add Days Event
		Calendar.Events.AddDays = {};
		_.extend(Calendar.Events.AddDays, Backbone.Events);

		// Navigate Month Event
		Calendar.Events.NavigateMonth = {};
		_.extend(Calendar.Events.NavigateMonth, Backbone.Events);

	}

	return Calendar.Events.Config;

});