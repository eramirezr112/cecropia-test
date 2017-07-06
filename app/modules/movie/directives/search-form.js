angular.module('cecropiaApp.searchFormDirective', ['cecropiaApp.NYTMovie'])
    .directive('searchForm', function() {
        return {
            scope: true,
            templateUrl: 'modules/movie/directives/search.html',
            restrict: 'E',
            controller: ['$scope', 'NYTMovie', function($scope, NYTMovie) {
                $scope.movieText = '';
                $scope.subtitle = 'The 20 most recent reviews';

                NYTMovie.getRecentReviews().then(function(movies) {
                    $scope.movies = movies.data.results;
                });

                $scope.movieSearch = function() {

                    NYTMovie.search($scope.movieText).then(function(results) {
                        $scope.movies = results.data.results;
                        $scope.subtitle = 'Search Result';
                    });

                };

                $scope.clear = function() {

                    NYTMovie.getRecentReviews().then(function(movies) {
                        $scope.movies = movies.data.results;
                        $scope.movieText = '';
                        $scope.subtitle = 'The 20 most recent reviews';
                    });

                };

            }]
        };

    }).filter('searchResultImg', function() {
        return function(input) {
            if (typeof(input) == "undefined") {
                return "default_poster.jpg";
            } else {
                return input;
            }
        };
    });
