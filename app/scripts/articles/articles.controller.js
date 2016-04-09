(function() {
	'use strict';

	angular
		.module('supermodular.articles')
		.controller('ArticlesController', ArticlesController);

	ArticlesController.$inject = ['$state'];

	/* @ngInject */
	function ArticlesController($state) {

		var vm = angular.extend(this, {
			navigate: navigate
		});

    // ********************************************************************

		function navigate() {
			$state.go('app.article');
		}

	}

})();
