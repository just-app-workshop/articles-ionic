(function() {
	'use strict';

	angular
		.module('supermodular.articles')
		.factory('articlesService', articlesService);

	articlesService.$inject = [];

	/* @ngInject */
	function articlesService() {

		var service = {
			all: all,
			get: get
		};

		return service;

		// *******************************************************

		// http://stackoverflow.com/questions/17533888/s3-access-control-allow-origin-header
		function all(callback){
      var result = []
      callback(result);
		}

		function get(articleId) {
			var result = {}
			return result;
		}
	}
})();
