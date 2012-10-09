define(['jquery', 'backbone', 'handlebars', 'models/appointmentModel', 'collections/appointmentsCollection',
	'views/appointmentView', 'views/appointmentsView', 'text!templates/addAppointmentTemplate.html'],
function ( $, Backbone, Handlebars, AppointmentModel, AppointmentsCollection, AppointmentView, AppointmentsView, AddAppointmentTemplate ) {

	'use strict';

	Calendar.Views.AddAppointmentView = Backbone.View.extend({

		className: 'add-appointment',

		template: Handlebars.compile( AddAppointmentTemplate ),

		initialize: function () {

		},

		events: {
			'click .submit': 'createAppointment',
			'click .close': 'close'
		},

		render: function () {

			this.$el.html( this.template() );

			this.$submit = this.$('.submit');
			this.$title = this.$('.new-appt-title');
			this.$description = this.$('.new-appt-description');

			return this;

		},

		positionForm: function ( target ) {

			this.target = target;
			this.date = target.model.date;

			var height = 0, width = 0; // reset
			var height = target.$el.outerHeight(),
				width = target.$el.outerWidth(),
				addApptWidth = $('.add-appointment').outerWidth(),
				addApptHeight = $('.add-appointment').outerHeight();

			var left = target.$el.offset().left + ( width / 2 ) - ( addApptWidth / 2 ),
				top = target.$el.offset().top - ( height / 2 ) - ( addApptHeight / 2 );

			if ( top < $(window).scrollTop() ) {
				
				top = target.$el.offset().top - ( height / 2 ) + ( addApptHeight / 2 );

			}

			$('.add-appointment').css({

				left: left,
				top: top

			});

		},

		newAttributes: function () {

			var year = this.date.getFullYear(),
				month = this.date.getMonth(),
				day = this.date.getDate();

			if ( month < 10 ) { month = '0' + month.toString(); }
			if ( day < 10 ) { day = '0' + day.toString(); }

			this.dateId = year.toString() + month + day;

			return {
				date: this.dateId,
				title: this.$title.val().trim(),
				description: this.$description.val().trim()
			}

		},

		createAppointment: function () {

			var appointmentModel = new AppointmentModel( this.newAttributes() );

			if ( this.target.appointmentsCollection ) {

				// This day already has an Appointments Collection

				this.target.appointmentsCollection.create( appointmentModel );

			} else {

				this.target.appointmentsCollection = new AppointmentsCollection();

				this.target.appointmentsCollection.create( appointmentModel );


				this.target.appointmentsView = new AppointmentsView({

					collection: this.target.appointmentsCollection

				});

				this.target.addAppointments( this.target.appointmentsView );

				this.target.appointmentsCollection.trigger("add:all");

			}

			this.close();

		},

		close: function () {
			
			this.$el.hide();
			this.$title.val('');
			this.$description.val('');

			$('.day.focused').removeClass('focused');
		
		}

	});

	return Calendar.Views.AddAppointmentView;

});