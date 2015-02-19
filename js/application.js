define(['Models/appModel', 'Models/objectModel', 'Views/appDetailsView', 'Views/appHomeView', 'Views/appObjectTemplateView', 'Router/appRouter', 'Collections/appCollection', 'globals/globals', 'jquery', 'backbone'],
		function (AppModel, ObjectModel, DetailsView, HomeView, ObjectTemplateView, Router, ObjectCollection, globals, $, Backbone) {
				var Application = (function () {
						var objectModel = new ObjectModel(),
								appModel = new AppModel(),
								objectsCollection = new ObjectCollection(),
								homeView = new HomeView({model: appModel, collection: objectsCollection}),
								detailsView = new DetailsView({appmodel: appModel, model: objectModel, collection: objectsCollection});
						var module = {
								init: function () {
										var appRouter = new Router({model: appModel});
										Backbone.history.start();
								}
						};
						return module;
				})();
				return Application;
		});

