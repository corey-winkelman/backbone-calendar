define( ['backbone', 'localStorage', 'models/appointmentModel'],
function ( Backbone, LocalStorage, AppointmentModel ) {

	'use strict';

	Calendar.Collections.Months = Backbone.Collection.extend({
		
		model: MonthModel

	});

	return Calendar.Collections.Months;

});