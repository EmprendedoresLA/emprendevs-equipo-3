'use strict';

/**
 * @ngdoc function
 * @name anyandgoApp.controller:playerCtrl
 * @description
 * # playerCtrl
 * Controller of the anyandgoApp
 */
angular.module('anyandgoApp')
  .controller('playerCtrl', function ($scope, Restangular) {
   $scope.players = Restangular.all("players").getList().$object;
     });
