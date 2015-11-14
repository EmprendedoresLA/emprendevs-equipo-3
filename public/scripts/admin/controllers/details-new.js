'use strict';

/**
 * @ngdoc function
 * @name anyandgoApp.controller:detailsNewCtrl
 * @description
 * # detailsNewCtrl
 * Controller of the anyandgoApp
 */
angular.module('anyandgoApp')
  .controller('detailsNewCtrl', function ($scope, $location, Restangular) {
  $scope.save = function() {
    Restangular.all('detailss').post($scope.details).then(function(details) {  
      if(navigator.userAgent.match(/Zombie/)) {
          document.location.hash = "#/crud/details";
      } else {
        $location.path('/crud/details');
      }
    });
  }
});
