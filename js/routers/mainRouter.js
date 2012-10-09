define(['backbone', 'events', 'models/monthModel', 'views/monthView',
	'collections/daysCollection', 'views/daysView',
	'collections/appointmentsCollection', 'views/appointmentsView'],
function ( Backbone, Events, MonthModel, MonthView, DaysCollection,DaysView, AppointmentsCollection, AppointmentsView ) {

	new Events();

	Calendar.Routers.Main = Backbone.Router.extend({

		routes: {
			'': 'default',
			'calendar/:year/:month': 'viewMonth'
		},

		initialize: function () {

			Calendar.Events.NavigateMonth.on( 'view:prev', this.viewPrevMonth, this );
			Calendar.Events.NavigateMonth.on( 'view:next', this.viewNextMonth, this );

		},

		default: function () {

			var d = new Date(),
				yearId = d.getFullYear(),
				monthId = d.getMonth() + 1;

			this.request( yearId, monthId );

		},

		request: function ( yearId, monthId ) {

			this.navigate( 'calendar/' + yearId + '/' + monthId, { trigger: true });

		},

		viewMonth: function ( yearId, monthId ) {

			// Month
			// ------------

			var monthModel = new MonthModel();

			var monthView = new MonthView({

				model: monthModel

			});

			monthModel.fetch( yearId, ( monthId - 1 ) );

			// Days
			// -----------

			var daysCollection = new DaysCollection();

			var daysView = new DaysView({

				collection: daysCollection

			});

			daysCollection.fetch( yearId, ( monthId - 1 ) );

		},

		viewPrevMonth: function () {

			var hash = $(window.location.hash.split('/'))[0],
				yearId = $(window.location.hash.split('/'))[1],
				monthId = $(window.location.hash.split('/'))[2];

			window.location.hash = hash + '/' + yearId + '/' + ( monthId - 1 );

			Calendar.Events.NavigateMonth.off( 'view:prev' );

		},

		viewNextMonth: function () {

			var hash = $(window.location.hash.split('/'))[0],
				yearId = $(window.location.hash.split('/'))[1],
				monthId = parseInt( $(window.location.hash.split('/'))[2] );

				console.log(monthId);

			window.location.hash = hash + '/' + yearId + '/' + ( monthId + 1 );

			Calendar.Events.NavigateMonth.off( 'view:next' );

		}

	});

	return Calendar.Routers.Main;

});