'use strict';

// Declare app level module which depends on views, and components
angular.module('cecropiaApp.routes', ['ngRoute'])
    .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

        $locationProvider.hashPrefix('!');

        $routeProvider.when('/home', {
            templateUrl: 'modules/home/home.html',
            controller: 'HomeController'
        })

        $routeProvider.otherwise({redirectTo: '/home'});
    }]);
