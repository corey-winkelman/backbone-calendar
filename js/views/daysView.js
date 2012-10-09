define(['jquery', 'backbone', 'handlebars', 'models/dayModel', 'views/dayView',
	'collections/daysCollection', 'views/addAppointmentView'],
function ( $, Backbone, Handlebars, DayModel, DayView, DaysCollection, AddAppointmentView ) {

	'use strict';

	Calendar.Views.Days = Backbone.View.extend({

		initialize: function () {

			this.collection.on( 'fetch:days:completed', this.addAll, this );
			this.on( "show:addAppointmentView", this.showAddAppointmentView, this );

		},

		render: function () {

			return this;

		},

		addOne: function ( newDayModel ) {

			var view = new DayView({

				model: newDayModel

			});

			view.parentView = this;

			$('.days').append( view.render().el );

		},

		addAll: function () {

			this.collection.each( this.addOne, this );

			Calendar.Events.AddDays.trigger( 'add:days:completed' );

		},

		showAddAppointmentView: function ( target ) {

			if ( this.addAppointmentView ) {

				this.addAppointmentView.$el.show();

			} else {

				this.addAppointmentView = new AddAppointmentView();

				$('body').append( this.addAppointmentView.render().el );

			}

			this.addAppointmentView.positionForm( target );

		}

	});

	return Calendar.Views.Days;

});