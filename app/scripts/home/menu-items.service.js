(function() {
	'use strict';

	angular
		.module('supermodular.home')
		.factory('menuItems', menuItems);

	menuItems.$inject = [];

	/* @ngInject */
	function menuItems() {
		var data = [{
			title: 'PopOver menu',
			path: 'popover-menu',
			icon: 'ion-ios-arrow-down'
		}, {
			title: 'Elements',
			path: 'elements',
			icon: 'ion-android-checkbox-outline'
		}, {
			title: 'Map',
			path: 'map',
			icon: 'ion-map'
		}];

		return data;
	}
})();
