define(['jquery', 'backbone', 'views/appointmentView'],
function ( $, Backbone, AppointmentView ) {

	'use strict';

	Calendar.Views.Appointments = Backbone.View.extend({

		className: "appointments-collection",

		initialize: function () {
			
			this.collection.on( 'add', this.addOne, this );
			this.collection.on( 'add:all', this.addAll, this );

		},
		
		render: function() {
			
			return this;

		},

		addOne: function ( newAppointmentModel ) {

			var view = new AppointmentView({

				model: newAppointmentModel

			});

			this.$el.append( view.render().el );

		},

		addAll: function () {

			this.collection.each( this.addOne, this );

		}

	});

	return Calendar.Views.Appointments;

});

