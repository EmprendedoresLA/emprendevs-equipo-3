'use strict';

/**
 * @ngdoc function
 * @name anyandgoApp.controller:playerNewCtrl
 * @description
 * # playerNewCtrl
 * Controller of the anyandgoApp
 */
angular.module('anyandgoApp')
  .controller('playerNewCtrl', function ($scope, $location, Restangular, toastr, $window) {
  $scope.save = function(player) {
    $scope.player = {
      name: player.name.$modelValue,
      lastname: player.lastname.$modelValue,
      email: player.email.$modelValue,
      phone: player.phone.$modelValue,
      height: player.height.$modelValue,
      weight: player.weight.$modelValue 
    };
    Restangular.all('players').post($scope.player).then(function(player) {
      $window.location.href='#/players';
      toastr.info('You add a new Player');
    });
  }
});
