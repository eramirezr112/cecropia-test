angular.module('cecropiaApp.detail', ['cecropiaApp.NYTMovie'])
    .controller('DetailController', ['$scope', '$routeParams', 'NYTMovie', function($scope, $routeParams, NYTMovie) {

        var movieName = $routeParams.movieName;
        var publicationDate = $routeParams.pDate;
        var openDate = $routeParams.oDate;

        $scope.title = 'Detail Page: ' + movieName;

        NYTMovie.search(movieName).then(function(movie) {

            $scope.movie = movie.data.results[0];            

        });

    }]);
