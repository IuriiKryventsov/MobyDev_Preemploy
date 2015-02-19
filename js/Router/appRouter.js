define(['backbone'], function (Backbone) {
		App.Routers.Router = Backbone.Router.extend({
				routes: {
						"": 'viewRoute',
						'objects': 'viewRoute',
						'objects/:id': 'detailsRoute',
						'*other': 'viewRoute'
				},
				initialize: function (options) {
						this.appModel = options.model;
				},
				viewRoute: function () {
						this.appModel.set({page: "homepage"});
				},
				detailsRoute: function (id) {
						this.appModel.set({page: "detailspage", id: id});
				}
		});
		return App.Routers.Router;
});
