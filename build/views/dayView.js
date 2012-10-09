define(["backbone","handlebars","collections/appointmentsCollection","views/appointmentsView","text!templates/dayTemplate.html"],function(e,t,n,r,i){return Calendar.Views.Day=e.View.extend({className:"day",events:{click:"showAddAppointmentForm"},template:t.compile(i),initialize:function(){this.model.on("all",this.render,this)},render:function(){this.$el.html(this.template(this.model.toJSON()));var e=this.model.date.getFullYear(),t=this.model.date.getMonth(),n=this.model.date.getDate();t<10&&(t="0"+t.toString()),n<10&&(n="0"+n.toString());var r=e.toString()+t+n;return this.$el.attr("id",r),this.queryAppointments(r),this},showAddAppointmentForm:function(){$(".day.focused").removeClass("focused"),this.parentView.trigger("show:addAppointmentView",this),this.$el.addClass("focused")},addAppointments:function(e){this.$el.append(e.render().el)},queryAppointments:function(e){var t=localStorage.getItem("appointments");if(t==null||t.length==0)return;var i=t.split(","),s=[];for(var o=0;o<i.length;o++){var u=localStorage.getItem("appointments-"+i[o]);u=$.parseJSON(u),u.date==e&&s.push(u)}s.length>0&&(this.appointmentsCollection=new n(s),this.appointmentsView=new r({collection:this.appointmentsCollection}),this.addAppointments(this.appointmentsView),this.appointmentsCollection.trigger("add:all"))}}),Calendar.Views.Day})