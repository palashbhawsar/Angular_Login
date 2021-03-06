'use strict';

var app=angular.module('loginApp', ['ngRoute']);


app.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/login', {templateUrl: 'partials/login.html', controller:'loginCtrl'});
    $routeProvider.when('/home', {templateUrl: 'partials/home.html', controller:'homeCtrl'});
    
    $routeProvider.otherwise({redirectTo: '/login'});
    
}]);

app.run(function($rootScope, $location , loginService){
        var routespermission=['/home'];
    $rootScope.$on('$routeChangeStart', function(){
        
        if(routespermission.indexOf($location.path()) !=-1)        
        {
            var connected=loginService.islogged();
            connected.then(function(msg){
                if(!msg.data) $location.path('/login');
            });
          
        }
        });
        });