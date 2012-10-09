define( ['backbone', 'models/dayModel'],
function ( Backbone, DayModel ) {

	'use strict';

	Calendar.Collections.Days = Backbone.Collection.extend({

		model: DayModel,

		fetch: function ( yearId, monthId ) {

			var numDays = new Date( yearId, ( monthId + 1 ), 0 ).getDate();

			for ( var i = 0, day = 1; i < numDays; i++ ) {

				var dayModel = new DayModel({

					date: new Date( yearId, monthId, day ),
					day: day++

				});

				dayModel.date = new Date( yearId, monthId, ( day - 1 ) );
				
				this.add( dayModel )

			}

			this.trigger( 'fetch:days:completed' );

		}

	});

	return Calendar.Collections.Days;

});