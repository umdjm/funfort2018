var app = angular.module('funfortApp');

app.factory('Auth', function($firebaseAuth){
    var auth = $firebaseAuth();

    return auth;
  });
