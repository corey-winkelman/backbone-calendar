define(["backbone","handlebars","models/monthModel","text!templates/monthTemplate.html"],function(e,t,n,r){return Calendar.Views.Month=e.View.extend({el:".calendar",template:t.compile(r),initialize:function(){this.model.on("fetch:month:completed",this.render,this),Calendar.Events.AddDays.on("add:days:completed",this.lastDays,this)},render:function(){$(".days").empty(),this.$el.html(this.template(this.model.toJSON()));var e=this.model.attributes.start;for(var t=e;t>0;t--)this.$(".days").prepend('<div class="day day-blank"><span class="number">'+this.model.lastOfPrevMonth-- +"</span></div>")},lastDays:function(){Calendar.Events.AddDays.off("add:days:completed");var e=this.model.lastDay;if(e==6)return;for(var t=e,n=1;t<6;t++)this.$(".days").append('<div class="day day-blank"><span class="number">'+n++ +"</span></div>")},close:function(){this.off(),this.model.off(),this.remove()}}),Calendar.Views.Month})