'use strict';

var app = angular
  .module('funfortApp', [
    'ui.router',
    'angular-md5',
    'firebase'
  ]);

  app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home/home.html'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'auth/login.html'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'auth/register.html'
      });

    $urlRouterProvider.otherwise('/');
  });