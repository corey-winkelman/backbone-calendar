define(['jquery', 'backbone', 'handlebars', 'text!templates/appointmentTemplate.html'],
function ( $, Backbone, Handlebars, AppointmentTemplate ) {

	'use strict';

	Calendar.Views.Appointment = Backbone.View.extend({

		className: 'appointment-wrapper',

		template: Handlebars.compile( AppointmentTemplate ),

		initialize: function () {

			this.model.on( 'change', this.render, this );
			this.model.on( 'destroy', this.remove, this );

		},

		events: {
			'hover .delete': 'showWarning',
			'click .delete': 'deleteAppointment'
		},

		render: function () {

			this.$el.html( this.template( this.model.toJSON() ) );
			this.$appointment = this.$('.appointment');

			return this;

		},

		showWarning: function () {

			this.$appointment.toggleClass('label-warning label-important');

		},

		deleteAppointment: function () {

			this.model.destroy();
			
			return false;

		}

	});

	return Calendar.Views.Appointment;

});