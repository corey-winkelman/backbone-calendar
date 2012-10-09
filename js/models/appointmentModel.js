define(['backbone'], function ( Backbone ) {

	'use strict';

	Calendar.Models.Appointment = Backbone.Model.extend({
		
		defaults: {
			date: null,
			title: '',
			description: ''
		}

	});

	return Calendar.Models.Appointment;

});