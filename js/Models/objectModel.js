define(['backbone'], function (Backbone) {
		App.Models.Details = Backbone.Model.extend({
				url: function () {
						return 'http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&guid=' + this.id
				},
				sync: function (method, model, options) {
						var _sync = Backbone.sync;
						options.success = function (data) {
								model.set('data', data.response.listings);
						};
						return _sync.apply(this, [method, model, options]);
				}
		});
		return App.Models.Details;
});
