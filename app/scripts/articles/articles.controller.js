(function() {
	'use strict';

	angular
		.module('supermodular.articles')
		.controller('ArticlesController', ArticlesController);

	ArticlesController.$inject = ['$scope', '$state', 'articlesService'];

	/* @ngInject */
	function ArticlesController($scope, $state, articlesService) {

		var vm = angular.extend(this, {
			articles: [],
			navigate: navigate
		});

		// ********************************************************************

		articlesService.all(function(data){
			vm.articles = data;
		});

    function navigate() {
      $state.go('app.article');
    }

	}

})();
