angular.module('app')
  .controller('mainCtrl',['$scope','$ionicModal','$http', function($scope, $ionicModal,$http){

    $ionicModal.fromTemplateUrl('my-modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });
    $scope.openModal = function() {
      $scope.modal.show();
    };
    $scope.closeModal = function() {
      $scope.modal.hide();
    };

    $scope.user = {};
    $scope.registerUser = function (user) {
      $scope.modal.hide();
      user.loc = [];
      user.loc.push(myLatlng.lng()); //Important, longitude first
      user.loc.push(myLatlng.lat());
      console.log(JSON.stringify(user));
      $http({
        method: "POST",
        url: "http://ionicbackend-plaul.rhcloud.com/api/friends/register/"+user.distance,
        data: user
      }).then() //Your task is to handle the response
    }

  }]);
