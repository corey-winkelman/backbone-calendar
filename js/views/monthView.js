define(['jquery', 'backbone', 'handlebars', 'models/monthModel', 'text!templates/monthTemplate.html'],
function ( $, Backbone, Handlebars, MonthModel, MonthTemplate ) {

	'use strict';

	Calendar.Views.Month = Backbone.View.extend({

		el: '.calendar',

		template: Handlebars.compile( MonthTemplate ),

		initialize: function () {

			this.model.on( 'fetch:month:completed', this.render, this );

			Calendar.Events.AddDays.on( 'add:days:completed', this.lastDays, this );

		},

		events: {
			'click .prev-month': 'viewPrevMonth',
			'click .next-month': 'viewNextMonth'
		},

		render: function () {

			$('.days').empty();

			this.$el.html( this.template( this.model.toJSON() ) );

			var start = this.model.attributes.start;

			for ( var i = start; i > 0; i-- ) {

				this.$('.days').prepend('<div class="day day-blank"><span class="number">' + (this.model.lastOfPrevMonth--) + '</span></div>');

			}

		},

		lastDays: function () {

			Calendar.Events.AddDays.off( 'add:days:completed' );

			var lastDay = this.model.lastDay;

			if ( lastDay == 6 ) {

				return;

			}

			for ( var i = lastDay, d = 1; i < 6; i++ ) {

				this.$('.days').append('<div class="day day-blank"><span class="number">' + (d++) + '</span></div>');

			}

		},

		viewPrevMonth: function () {

			Calendar.Events.NavigateMonth.trigger("view:prev");

		},

		viewNextMonth: function () {

			Calendar.Events.NavigateMonth.trigger("view:next");

		},

		close: function () {

			this.off();
			this.model.off();
			this.remove();

		}

	});

	return Calendar.Views.Month;

});