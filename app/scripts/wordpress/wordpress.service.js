(function() {
	'use strict';

	angular
		.module('supermodular.wordpress')
		.factory('wordpressService', wordpressService);

	wordpressService.$inject = ['$http', '$q'];

	/* @ngInject */
	function wordpressService($http, $q) {

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
			var articles = []
			callback(articles);
		}
		function get(articleId) {
			var article = {};
			return article;
		}


	}
})();
