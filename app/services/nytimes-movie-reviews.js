'use strict';

angular.module('cecropiaApp.NYTMovie', [ /*'connectionsApp.ConstantService'*/ ])
    .factory('NYTMovie', ['$http', function($http) {

        var baseUrl = 'https://api.nytimes.com/svc/movies/v2/reviews';
        var apikey = '75298306099f413fba34e6f6d51ddc2e';

        return {
            getRecentReviews: function() {
                return $http.get(baseUrl + '/all.json?api-key=' + apikey);
            },
            search: function(textFilter) {
                return $http.get(baseUrl + '/search.json?api-key=' + apikey + '&query=' + textFilter);
            }
        }

    }]);
