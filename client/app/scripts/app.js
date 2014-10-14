'use strict';

/**
 * @ngdoc overview
 * @name antoniocapeloApp
 * @description
 * # antoniocapeloApp
 *
 * Main module of the application.
 */
angular
  .module('antoniocapeloCom', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/cv', {
        templateUrl: 'views/cv.html',
        controller: 'CvCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });