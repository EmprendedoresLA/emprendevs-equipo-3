'use strict';

/**
 * @ngdoc function
 * @name anyandgoApp.controller:playerEditCtrl
 * @description
 * # playerEditCtrl
 * Controller of the anyandgoApp
 */
angular.module('anyandgoApp')
  .controller('playerEditCtrl', function ($scope, $location, Restangular, player, toastr, $window) {
  var original = player;
  $scope.player = Restangular.copy(original);
  

  $scope.isClean = function() {
    return angular.equals(original, $scope.player);
  }

  $scope.destroy = function() {
    original.remove().then(function() {
      $window.location.href='#/players';
      toastr.info('You delete a Player');
    });
  };

  $scope.save = function() {
    $scope.player.put().then(function() {
      $window.location.href='#/players';
      toastr.info('You edit a Player');
    });
  };
});
