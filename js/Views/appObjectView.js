define(['backbone', 'text!Templates/object.html'], function (Backbone, ObjectTemplate) {
		App.Views.ObjectView = Backbone.View.extend({
				template: _.template(ObjectTemplate),
				initialize: function () {
						this.listenTo(this.model, "change", this.render);
						this.render();
				},
				render: function () {
						this.$el.html(this.template(this.model));
						return this;
				}
		});
		return App.Views.ObjectView;
});
