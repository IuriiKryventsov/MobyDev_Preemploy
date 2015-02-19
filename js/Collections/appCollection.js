define(['backbone', '../Models/objectModel'], function (Backbone, objectModel) {
		App.Collections.Objects = Backbone.Collection.extend({
				model: objectModel,
				url: 'http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=leeds',

				sync: function (method, collection, options) {
						var loadMore = options.data.loadMore;
						var _sync = Backbone.sync;
						options.success = function (data) {
								if (loadMore) {
										var myModels = [];
										for (var i = 0; i < collection.models.length; i++) {
												myModels.push(collection.models[i]);
										}
										for (var i = 0; i < data.response.listings.length; i++) {
												myModels.push(data.response.listings[i]);
										}
										collection.reset(myModels);
								}
								else {
										collection.reset(data.response.listings);
										collection.invoke('set', {"total_results": data.response.total_results})
								}
						};
						return _sync.apply(this, [method, collection, options]);
				}
		});
		return App.Collections.Objects;
});

