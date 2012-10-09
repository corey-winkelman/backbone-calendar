define(['jquery', 'backbone', 'handlebars', 'collections/appointmentsCollection',
	'views/appointmentsView', 'text!templates/dayTemplate.html'],
function ( $, Backbone, Handlebars, AppointmentsCollection, AppointmentsView, DayTemplate ) {

	'use strict';

	Calendar.Views.Day = Backbone.View.extend({

		className: 'day',

		events: {
			'click': 'showAddAppointmentForm'
		},

		template: Handlebars.compile( DayTemplate ),

		initialize: function () {

			this.model.on( 'all', this.render, this );

		},

		render: function () {

			this.$el.html( this.template( this.model.toJSON() ));

			var year = this.model.date.getFullYear(),
				month = this.model.date.getMonth(),
				day = this.model.date.getDate();

			if ( month < 10 ) { month = '0' + month.toString(); }
			if ( day < 10 ) { day = '0' + day.toString(); }

			var dateId = year.toString() + month + day;

			this.$el.attr( 'id', dateId );

			this.queryAppointments( dateId );

			return this;

		},

		showAddAppointmentForm: function () {

			console.log("Click");

			$('.day.focused').removeClass('focused');

			this.parentView.trigger( "show:addAppointmentView", this );

			this.$el.addClass('focused');

		},

		addAppointments: function ( appointmentsView ) {
			
			this.$el.append( appointmentsView.render().el );

		},

		queryAppointments: function ( dateId ) {

			var listAppointments = localStorage.getItem('appointments');

			if ( listAppointments == null || listAppointments.length == 0 ) { return }

			var arrayAppointments = listAppointments.split(',');
			var arrayThisDaysAppointments = [];

			for ( var i = 0; i < arrayAppointments.length; i++ ) {

				var appointment = localStorage.getItem('appointments-' + arrayAppointments[i]);

				appointment = $.parseJSON(appointment);

				if ( appointment.date == dateId ) {

					arrayThisDaysAppointments.push( appointment );

				}

			}

			if ( arrayThisDaysAppointments.length > 0 ) {

				this.appointmentsCollection = new AppointmentsCollection( arrayThisDaysAppointments );

				this.appointmentsView = new AppointmentsView({

					collection: this.appointmentsCollection

				});

				this.addAppointments( this.appointmentsView );

				this.appointmentsCollection.trigger("add:all");

			}

		}
 
	});

	return Calendar.Views.Day;

});