define(['models/appointmentModel'], function ( AppointmentModel ) {

	describe("Appointment Model", function() {
	  
		it('should have empty defaults', function() {

			var appointmentModel = new AppointmentModel();

			expect(appointmentModel.get('date')).toBe(null);
			expect(appointmentModel.get('title')).toBe('');
			expect(appointmentModel.get('description')).toBe('');

		});

		it('should be able to pass custom attributes', function () {

			var appointmentModel = new AppointmentModel({
				date: 2012,
				title: 'Get oil change for car.',
				description: "You're three months overdue."
			});

			expect(appointmentModel.get('date')).toBe(2012);
			expect(appointmentModel.get('title')).toBe('Get oil change for car.');
			expect(appointmentModel.get('description')).toBe("You're three months overdue.");

		});

		it('Fires a custom event when the state changes.', function() {

		    var spy = jasmine.createSpy('-change event callback-');

		    var appointmentModel = new AppointmentModel();

		    // how do we monitor changes of state?
		    appointmentModel.on('change', spy);

		    // what would you need to do to force a change of state?
		    appointmentModel.set({ text: 'Get oil change for car.' });

		    expect(spy).toHaveBeenCalled();

		});

	});

});