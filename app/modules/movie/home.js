angular.module('cecropiaApp.home', ['cecropiaApp.searchFormDirective'])
    .controller('HomeController', ['$scope', function($scope) {

        $scope.title = 'Home Page';

    }]);
