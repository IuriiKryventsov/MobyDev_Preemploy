define(['backbone', 'text!Templates/details.html'], function (Backbone, DetailsTemplate) {
		App.Views.DetailsView = Backbone.View.extend({
				el: '#content',
				template: _.template(DetailsTemplate),
				initialize: function (options) {
						this.appmodel = options.appmodel;
						this.storage = options.storage;
						this.listenTo(this.appmodel, "change", this.getObjectData);
						this.listenTo(this.model, "change", this.render);
				},
				getObjectData: function () {
						var page = this.appmodel.get("page");
						if (page === 'detailspage') {
								var id = this.appmodel.get("id");
								this.model.set('id', id, {silent: true});
								this.model.fetch({dataType: 'jsonp'})
						}
				},
				render: function () {
						this.$el.html(this.template(this.model.toJSON()));
				}
		});
		return App.Views.DetailsView;
});

