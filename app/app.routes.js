'use strict';

// Declare app level module which depends on views, and components
angular.module('cecropiaApp.routes', ['ngRoute'])
    .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

        $locationProvider.hashPrefix('!');

        $routeProvider.when('/home', {
            templateUrl: 'modules/movie/home.html',
            controller: 'HomeController'
        }).when('/detail/:movieName', {
            templateUrl: 'modules/movie/detail.html',
            controller: 'DetailController'
        })

        $routeProvider.otherwise({ redirectTo: '/home' });
    }]);
