'use strict';

/**
 * @ngdoc function
 * @name antoniocapeloApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the antoniocapeloApp
 */
angular.module('antoniocapeloCom')
    .controller('MainCtrl', function($scope) {
        $scope.$on('$routeChangeSuccess', function() {
			// init AWTY instance
			var awtyInstance = new Awty();
			awtyInstance.init();
        });
    });
