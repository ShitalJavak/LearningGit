'use strict';
 
angular.module('ProjectInventory').controller('LoginController',
    ['$scope', '$rootScope', '$location', 'AuthenticationService',
    function ($scope, $rootScope, $location, AuthenticationService) {
        // reset login status
        AuthenticationService.ClearCredentials();
 
        $scope.login = function () {
        	alert("USER ID "+$scope.username+"   PASSWORD :::::"+ $scope.password)
            $scope.dataLoading = true;
         AuthenticationService.Login($scope.username, $scope.password, function(response) {
            	 alert("AFTER Login SERVICE");
                if(response[0].status) {
                	$rootScope.user = $scope.username ;
                    AuthenticationService.SetCredentials($scope.username, $scope.password);
                   alert("Inside Login Success ::::: "+response[0].role);
                   if(response[0].role =='admin'){
                	   alert("Inside home");
                	$location.path('/Accounts');
                	}
                   else
                   {  alert("Inside Account");
                	   $location.path('/NewAccount');
                   }
                   
                } else {
                    $scope.error = "Incorrect User Id or Password";
                    $scope.dataLoading = false;
                }
            });
        };
    }]);