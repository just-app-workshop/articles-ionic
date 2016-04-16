(function() {
	'use strict';

	angular
		.module('supermodular.wordpress')
		.factory('wordpressService', wordpressService);

	wordpressService.$inject = ['$http', '$q'];

	/* @ngInject */
	function wordpressService($http, $q) {

		var url = 'http://demo.titaniumtemplates.com/wordpress/?json=1';
		var articles = [];

		var service = {
			getArticles: getArticles,
			get: get
		};
		return service;

		// *******************************************************

		// http://stackoverflow.com/questions/17533888/s3-access-control-allow-origin-header
		function getArticles() {

					return $http.get(url)
						.then(function(response) {
							articles = [];

							_.each(response.data.posts, function(item) {
								var imageUrl = item.attachments.length > 0 ? item.attachments[0].images.full.url : null;
								var tags = [];
								_.each(item.tags, function(tag) {
									tags.push(tag.title);
								});

								var contentIndex = item.content.indexOf('</p>') + 4;
								var content = contentIndex === -1 ? item.content : item.content.substring(contentIndex);

								articles.push({
									id: item.id,
									title: item.title,
									brief: item.excerpt,
									image: imageUrl,
									date: item.date,
									content: content,
									author: item.author.name,
									tags: tags,
									url: url
								});
							});
							return articles;
						});
				}



		function get(articleId) {
			var article = {};
			return article;
		}


	}
})();
