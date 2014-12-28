'use strict';

/**
 * @ngdoc function
 * @name antoniocapeloApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the antoniocapeloApp
 */
angular.module('antoniocapeloCom')
    .controller('MainCtrl', ['$scope', '$http', 'CAPELO.GLOBAL', function($scope, $http, GLOBAL) {
        $scope.$on('$routeChangeSuccess', function() {
            // init AWTY instance
            var awtyInstance = new Awty();
            awtyInstance.init();
        });

        (function init() {
        	$scope.data = {};

            $http.get(GLOBAL.api.lastPost).
	            success(function(data, status, headers, config) {
	                $scope.data.lastPost = data;
	            }).
	            error(function(data, status, headers, config) {
	                $scope.data.lastPost = undefined;
	            });
        }());

    }]);
