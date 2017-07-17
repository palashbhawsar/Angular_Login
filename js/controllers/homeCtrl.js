'use strict'

app.controller('homeCtrl', ['$scope','loginService' ,function($scope, loginService){
    $scope.txt='loginService.username';
 
$scope.logout=function(){
    loginService.logout();
}
}])