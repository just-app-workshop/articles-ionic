(function() {
	'use strict';

	angular
		.module('supermodular.wordpress')
		.controller('WordpressArticleController', WordpressArticleController);

	WordpressArticleController.$inject = ['$stateParams', 'wordpressService'];

	/* @ngInject */
	function WordpressArticleController($stateParams, wordpressService) {
		var vm = angular.extend(this, {
			article: null
		});

		// ********************************************************************

		var articleId = parseInt($stateParams.articleId);

		wordpressService.getArticle(articleId)
			.then(function(article) {
				vm.article = article;
			});

	}
})();
