define(['models/dayModel', 'views/dayView'],
function ( DayModel, DayView ) {

	var dayModel = new DayModel();

	var dayView = new DayView({
		model: dayModel
	});

	describe("A Day View", function() {
	  
		it("should have the class 'day'", function() {

			expect( dayView.$el.hasClass("day") ).toBe(true);

		});

	});

	/*describe("Clicking a Day View", function() {
	  
		it("should show the add appointment form", function() {

			expect( dayView.$el.hasClass("focused") ).toBe(true);

		});

	});*/

});