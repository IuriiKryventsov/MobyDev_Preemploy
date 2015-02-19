define(['backbone', 'Views/appObjectTemplateView', 'text!Templates/homepage.html'], function (Backbone, appObjectTemplateView, HomepageTemplate) {
		App.Views.HomeView = Backbone.View.extend({
				events: {
						"click button#btn": "loadMore"
				},
				el: '#content',
				template: _.template(HomepageTemplate),
				initialize: function () {
						this.listenTo(this.model, "change", this.checkRoutePage);
						this.listenTo(this.collection, "change", this.renderCounter);
						this.listenTo(this.collection, "reset", this.renderCounter);
				},
				render: function () {
						this.$el.html(this.template(this.collection.toJSON()));
						var objectsTemplateView = new appObjectTemplateView({collection: this.collection, storage: this.storage});
						objectsTemplateView.render();
						if (this.collection.length === 0) {
								this.collection.fetch({
										data: {loadMore: false},
										type: 'GET',
										dataType: 'jsonp'
								});
						}
						else {
								this.renderCounter()
						}
						return this;
				},
				renderCounter: function () {
						$('#counter').text(this.collection.length + ' of ' + this.collection.models[0].attributes.total_results + ' matches');
				},
				checkRoutePage: function () {
						var page = this.model.get("page");
						if (page === 'homepage') {
								this.render();
						}
				},
				loadMore: function () {
						i += 1;
						this.collection.fetch({
								url: 'http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=' + i + '&place_name=leeds',
								data: {loadMore: true},
								dataType: 'jsonp'
						});
				}
		});
		return App.Views.HomeView;
});
