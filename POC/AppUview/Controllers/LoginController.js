'use strict';
 
angular.module('ProjectInventory').controller('LoginController',['$scope', '$rootScope', '$location','$window', 'loginService',
    function ($scope, $rootScope, $location,$window, loginService) {

		console.log(" In Login Controller");
		
		// reset login status
		 $scope.logout = function () {
			 loginService.ClearCredentials();
		     console.log(" logout method");
		};
		   //Populate role for User
		/* $scope.listOfRoles = function () {
			 console.log("Start:: Populate roles function ");
		 loginService.listOfRoles().then(roleList);
		 console.log("End ::Populate roles function");
		};*/
		
		// assign data to scope variable roleList
		/*  var roleList = function (data) {
		   	 console.log("Start :: assigning a data ");
		 debugger;
		 $scope.rolesList = data;
		 console.log("End :: assigning a data ");
		};*/
        
        $scope.login = function (login) {
        	 console.log("Start :: login call");
        	 debugger;
         
        loginService.Login($scope.username, $scope.password).then(function(response) {
        
        	var userDet = response.data;
        	debugger;
        	console.log("Status of Validation is :::"+userDet.status);
            // if validation is successful and user role is not normal user then go Admin view of application
		        if(userDet.status) {
		        	console.log("Inside admin");
		        	$rootScope.user = userDet.firstName +" "+userDet.lastName ;
		        	$rootScope.userId = userDet.userId;
		        	$rootScope.userRole = userDet.userRole;
		        	console.log("Role logged in ::: "+$rootScope.userRole);
		        	console.log("Role logged in ::: "+$rootScope.userRole);
		        	
		        	debugger;
		        	loginService.SetCredentials($scope.userId, $scope.password);
		          		            switch ($rootScope.userRole) {
		            case 'SU01':
		                console.log("Logged in with Super User");
		                $location.path('/TileSectors');
		                break;
		            case 'SL01':
		                console.log("Logged in with Sector lead");
		                $location.path('/TileIndustries');
		                break;
		            case 'IL01':
		                console.log("Logged in with Industry lead");
		                $location.path('/TileAccounts');
		                break;
		            case 'AL01':
		                console.log("Logged in with Account lead");
		                $location.path('/TilePortfolios');
		                break;
		            case 'PL01':
		                console.log("Logged in with Portfolio lead");
		                $location.path('/TileApplicationGroups');
		                break;
		            case 'AA01':
		                console.log("Logged in with Portfolio lead");
		                $location.path('/TileApplications');
		                break;
		            default:
		          		            }
		        } // if validation is successful and user role is not normal user then go User view of application
		        else if (!userDet.status) {
		        	console.log("Inside error");
		          //  alert("Inside error");
		            $scope.error = "Incorrect User Id or Password";
		            $scope.dataLoading = false;
		        }
            
            });
         
        };
        
       

    }]);