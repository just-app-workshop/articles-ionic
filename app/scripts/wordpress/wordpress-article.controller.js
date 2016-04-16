(function() {
	'use strict';

	angular
		.module('supermodular.wordpress')
		.controller('WordpressArticleController', WordpressArticleController);

	ArticleController.$inject = ['$stateParams', 'wordpressService'];

	/* @ngInject */
	function WordpressArticleController($stateParams, wordpressService) {
		var vm = angular.extend(this, {
			article: null
		});

		// ********************************************************************

		var articleId = parseInt($stateParams.articleId);

		wordpressService.get(articleId)
			.then(function(article) {
				vm.article = article;
			});

	}
})();
