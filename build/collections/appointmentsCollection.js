define(["backbone","localStorage","models/appointmentModel"],function(e,t,n){return Calendar.Collections.Appointments=e.Collection.extend({model:n,localStorage:new e.LocalStorage("appointments")}),Calendar.Collections.Appointments})