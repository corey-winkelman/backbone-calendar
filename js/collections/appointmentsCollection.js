define( ['backbone', 'localStorage', 'models/appointmentModel'],
function ( Backbone, LocalStorage, AppointmentModel ) {

	'use strict';

	Calendar.Collections.Appointments = Backbone.Collection.extend({
		
		model: AppointmentModel,

		localStorage: new Backbone.LocalStorage( 'appointments' )

	});

	return Calendar.Collections.Appointments;

});
