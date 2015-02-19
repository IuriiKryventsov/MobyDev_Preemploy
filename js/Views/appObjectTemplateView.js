define(['backbone', 'Views/appObjectView'], function (Backbone, ObjectView) {
		App.Views.ObjectTemplateView = Backbone.View.extend({
				el: '#objectsList',
				initialize: function () {
						this.listenTo(this.collection, 'reset', this.render);
				},
				render: function () {
						$('#objectsList').html('');
						if (this.collection && this.collection.length > 0) {
								this.collection.each(function (details) {
										var objectView = new ObjectView({model: details, storage: this.storage});
										this.$el.append(objectView.render().el);
								}, this);
								return this;
						}
				}
		});
		return App.Views.ObjectTemplateView;
});
