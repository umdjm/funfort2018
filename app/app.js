'use strict';

(function (angular, firebase) {
  var app = angular.module('funfortApp', [
    'ui.router',
    'angular-md5',
    'firebase'
  ]);

  app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home/home.html',
        resolve: {
          requireNoAuth: function($state, Auth){
            return Auth.$requireSignIn().then(function(){
              $state.go('memberHome');
            }, function(){
              return;
            });
          }
        }
      })
      .state('memberHome', {
        url: '/memberHome',
        templateUrl: 'home/memberHome.html',
        resolve: {
          auth: function($state, Auth){
            return Auth.$requireSignIn().catch(function(){
              $state.go('home');
            });
          }
        }
      })
      .state('login', {
        url: '/login',
        controller: 'AuthCtrl as authCtrl',
        templateUrl: 'auth/login.html',
        resolve: {
          requireNoAuth: function($state, Auth){
            return Auth.$requireSignIn().then(function(){
              $state.go('memberHome');
            }, function(){
              return;
            });
          }
        }
      })
      .state('register', {
        url: '/register',
        controller: 'AuthCtrl as authCtrl',
        templateUrl: 'auth/register.html',
        resolve: {
          requireNoAuth: function($state, Auth){
            return Auth.$requireSignIn().then(function(){
              $state.go('memberHome');
            }, function(){
              return;
            });
          }
        }
      });

    $urlRouterProvider.otherwise('/');
  });

  app.config(function(){
    var config = {
      apiKey: 'AIzaSyBQERPuZn32N2MnLuUjK4bt9hzQVChNt2o',
      authDomain: 'funfort2018-f515e.firebaseapp.com',
      databaseURL: 'https://funfort2018-f515e.firebaseio.com',
      projectId: 'funfort2018-f515e',
      storageBucket: 'funfort2018-f515e.appspot.com',
      messagingSenderId: '340061704889'
    };
    firebase.initializeApp(config);
  });
})(angular, firebase);
