'use strict';

angular.module('anyandgoApp')
.controller('TrainingStepsCtrl', function($scope, $compile, $timeout, toastr,$location,$window, Restangular) {
    $scope.groups = Restangular.all("groups").getList().$object;
    $scope.players = Restangular.all("players").getList().$object;
    $scope.training = {};
    $scope.training.groups=[];
    $scope.training.activities = [];
    $scope.activity = {};
    $scope.activities = [];


    //some fancy code goes here...
    $scope.finishedWizard = function(){
      alert("llegaste al final del wizard!");
    }

    $scope.openModal = function(){
      $scope.group = {};
      $scope.group.players = [];
    }

    $scope.addPlayerGroup = function ($event, player) {
      $scope.player = {};
      $scope.player = player;
      if($($event.target).hasClass('fa-check')){
        angular.forEach($scope.group.players, function(py, k){
          if(py._id==$scope.player._id){
            $scope.group.players.splice(k,1);
            $($event.target).addClass('fa-plus').removeClass('fa-check');
          }
        });

      }else{
        $scope.group.players.push($scope.player);
        $($event.target).addClass('fa-check').removeClass('fa-plus');
      }

    }

    $scope.addGroupCard = function(){
      $scope.groups.push($scope.group);
      $('#modalNewGroup').modal('hide');
      $('i').addClass('fa-plus').removeClass('fa-check');
    }

    $scope.addActivityGroup = function(activity){

      $scope.activity = activity;
      $scope.activities.push($scope.activity);
      $scope.activity= {};
    }

});
