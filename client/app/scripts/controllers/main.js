'use strict';

/**
 * @ngdoc function
 * @name antoniocapeloApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the antoniocapeloApp
 */
angular.module('antoniocapeloApp')
    .controller('MainCtrl', function($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.$on('$routeChangeSuccess', function() {
			// init AWTY instance
			var awtyInstance = new Awty();
			awtyInstance.init();
			console.log(awtyInstance);
        });
    });
