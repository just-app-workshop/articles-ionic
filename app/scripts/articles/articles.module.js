(function() {
	'use strict';

	angular
		.module('supermodular.articles', [
			'ionic'
		])
		.config(function($stateProvider) {
			$stateProvider
				.state('app.articles', {
					url: '/articles',
					views: {
						'menuContent': {
							templateUrl: 'scripts/articles/articles.html',
							controller: 'ArticlesController as vm'
						}
					}
				})
				.state('app.article', {
					url: '/articles/:articleId',
					views: {
						'menuContent': {
							templateUrl: 'scripts/articles/article.html',
							controller: 'ArticleController as vm'
						}
					}
				});
		});
})();
