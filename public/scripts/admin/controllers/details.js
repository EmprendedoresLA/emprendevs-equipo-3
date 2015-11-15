'use strict';

/**
 * @ngdoc function
 * @name anyandgoApp.controller:detailsCtrl
 * @description
 * # detailsCtrl
 * Controller of the anyandgoApp
 */
angular.module('anyandgoApp')
  .controller('detailsCtrl', function ($scope, Restangular,$rootScope) {
  // $scope.details = Restangular.all("detailss").getList().$object;/
  console.log($rootScope.training);
  $scope.t =  $rootScope.training;

  });
