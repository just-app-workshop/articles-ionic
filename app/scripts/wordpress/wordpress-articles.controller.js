(function() {
	'use strict';

	angular
		.module('supermodular.wordpress')
		.controller('WordpressArticlesController', WordpressArticlesController);

	WordpressArticlesController.$inject = ['$scope', '$state', 'wordpressService'];

	/* @ngInject */
	function WordpressArticlesController($scope, $state, wordpressService) {

		var vm = angular.extend(this, {
			articles: [],
			navigate: navigate
		});

		// ********************************************************************

		wordpressService.all(function(data){
			vm.articles = data;
		});

		function navigate(articleId) {
			$state.go('app.article', { articleId: articleId });
		}


	}

})();
