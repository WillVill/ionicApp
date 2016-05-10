angular.module('app')
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider.
    state('map',{
    url: '/',
    templateUrl: 'templates/map.html',
    controller:'mapCtrl'
  });
  $urlRouterProvider.otherwise("/");
})
