define(['models/dayModel'], function ( DayModel ) {

	describe("Day Model defaults", function() {

		var dayModel = new DayModel();
	  
		it("should be null", function() {
		   
		  expect(dayModel.attributes.day).toBe(null);
		  expect(dayModel.attributes.date).toBe(null);

		});

	});

});