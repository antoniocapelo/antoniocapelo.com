'use strict';

/**
 * @ngdoc function
 * @name antoniocapeloApp.controller:MainCtrl
 * @description
 * # CvCtrl
 * Controller of the antoniocapeloApp
 */
angular.module('antoniocapeloCom')
    .controller('CvCtrl', function($scope) {
        var data = {
        	profile_description: {
        		title: 'Profile',
        		text: '<p>I\'m a former Civil Engineer who made some new life choices and became a Software Engineer.</p><p>asdasdasdasdas n e tal</p>'
        	},
        	contacts: {
        		'email': 'antonioccapelo@gmail.com,',
        		'phone': '+351 916 321 950',
        		'web' : 'www.antoniocapelo.com',
        		'social': {
        			'twitter' : 'twitter',
        			'linkedin' : 'linkedin',
        			'googleplus' : 'googleplus'
        		}
        	},
        	experience: [
        		{
        			title: 'Frontend Developer',
        			where: 'Blip.pt',
        			where_url: 'http://www.blip.pt',
        			from: 'August 2014',
        			to: 'Present',
        			text: 'I develop some cool stuff!'
        		},
        		{
        			title: 'Junior Frontend Developer',
        			where: 'Blip.pt',
        			where_url: 'http://www.blip.pt',
        			from: 'February 2014',
        			to: 'August 2014'
        		},
        		{
        			title: 'Intern Developer',
        			where: 'Blip.pt',
        			where_url: 'http://www.blip.pt',
        			from: 'August 2013',
        			to: 'January 2014'
        		},
        		{
        			title: 'Civil Engineer',
        			where: 'http://casais.pt/',
        			where_url: 'www.blip.pt',
        			from: 'February 2014',
        			to: 'August 2014'
        		}
        	],
        	skills: [
        		{
        			title: 'HTML 5',
        			level: 80
        		},
        		{
        			title: 'Javascript',
        			level: 90
        		},
        		{
        			title: 'CSS',
        			level: 85
        		},
        		{
        			title: 'Testing',
        			level: 75
        		}

        	]
        }
        
        $scope.data = data;

        
    });
