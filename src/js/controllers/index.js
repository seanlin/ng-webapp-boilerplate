angular.module('myApp.controllers', [])
	.controller('WelcomeCtrl', ['$scope', function($scope) {
		'use strict';
		$scope.testing = "Testing App";
	}]);