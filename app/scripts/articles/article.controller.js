(function() {
	'use strict';

	angular
		.module('supermodular.articles')
		.controller('ArticleController', ArticleController);

	ArticleController.$inject = ['$stateParams', 'articlesService'];

	/* @ngInject */
	function ArticleController($stateParams, articlesService) {
		var vm = angular.extend(this, {
			article: null
		});

		// ********************************************************************

		var articleId = parseInt($stateParams.articleId);

		articlesService.get(articleId)
			.then(function(article) {
				vm.article = article;
			});

	}
})();
