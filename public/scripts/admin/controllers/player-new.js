'use strict';

/**
 * @ngdoc function
 * @name anyandgoApp.controller:playerNewCtrl
 * @description
 * # playerNewCtrl
 * Controller of the anyandgoApp
 */
angular.module('anyandgoApp')
  .controller('playerNewCtrl', function ($scope, $location, Restangular) {
  $scope.save = function() {
    Restangular.all('players').post($scope.player).then(function(player) {  
      if(navigator.userAgent.match(/Zombie/)) {
          document.location.hash = "#/crud/player";
      } else {
        $location.path('/crud/player');
      }
    });
  }
});
