'use strict';

/**
 * @ngdoc function
 * @name anyandgoApp.controller:playerEditCtrl
 * @description
 * # playerEditCtrl
 * Controller of the anyandgoApp
 */
angular.module('anyandgoApp')
  .controller('playerEditCtrl', function ($scope, $location, Restangular, player) {
  var original = player;
  $scope.player = Restangular.copy(original);
  

  $scope.isClean = function() {
    return angular.equals(original, $scope.player);
  }

  $scope.destroy = function() {
    original.remove().then(function() {
      if(navigator.userAgent.match(/Zombie/)) {
          document.location.hash = "#/crud/player";
      } else {
        $location.path('/crud/player');
      }
    });
  };

  $scope.save = function() {
    $scope.player.put().then(function() {
      if(navigator.userAgent.match(/Zombie/)) {
          document.location.hash = "#/crud/player";
      } else {
        $location.path('/crud/player');
      }
    });
  };
});
