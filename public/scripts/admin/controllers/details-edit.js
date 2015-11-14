'use strict';

/**
 * @ngdoc function
 * @name anyandgoApp.controller:detailsEditCtrl
 * @description
 * # detailsEditCtrl
 * Controller of the anyandgoApp
 */
angular.module('anyandgoApp')
  .controller('detailsEditCtrl', function ($scope, $location, Restangular, details) {
  var original = details;
  $scope.details = Restangular.copy(original);
  

  $scope.isClean = function() {
    return angular.equals(original, $scope.details);
  }

  $scope.destroy = function() {
    original.remove().then(function() {
      if(navigator.userAgent.match(/Zombie/)) {
          document.location.hash = "#/crud/details";
      } else {
        $location.path('/crud/details');
      }
    });
  };

  $scope.save = function() {
    $scope.details.put().then(function() {
      if(navigator.userAgent.match(/Zombie/)) {
          document.location.hash = "#/crud/details";
      } else {
        $location.path('/crud/details');
      }
    });
  };
});
