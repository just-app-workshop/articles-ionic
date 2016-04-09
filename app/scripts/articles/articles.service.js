(function() {
	'use strict';

	angular
		.module('supermodular.articles')
		.factory('articlesService', articlesService);

	articlesService.$inject = ['$http', '$q'];

	/* @ngInject */
	function articlesService($http, $q) {

		var url = 'http://skounis.s3.amazonaws.com/mobile-apps/barebone-glossy/news.json';
		var result = [];

		var service = {
			all: all,
			get: get
		};
		return service;

		// *******************************************************

		// http://stackoverflow.com/questions/17533888/s3-access-control-allow-origin-header
		function all(callback){
			$http.get(url)
				.success(function(data, status, headers, config) {
					// this callback will be called asynchronously
					// when the response is available
					result = data.result;
					callback(result);
				})
				.error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
					console.log('ERROR (News):' + status);
					callback(result);
				});
		}

		function get(articleId) {
			var result = {}
			return result;
		}
	}
})();
