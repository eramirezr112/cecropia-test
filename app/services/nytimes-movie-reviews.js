'use strict';

angular.module('cecropiaApp.NYTMovie', ['cecropiaApp.ConstantService'])
    .factory('NYTMovie', ['$http', 'ConstantService', function($http, ConstantService) {

        return {
            getRecentReviews: function() {
                return $http.get(ConstantService.baseUrl + '/all.json?api-key=' + ConstantService.apikey);
            },
            search: function(textFilter) {
                return $http.get(ConstantService.baseUrl + '/search.json?api-key=' + ConstantService.apikey + '&query=' + textFilter);
            }
        }

    }]);
