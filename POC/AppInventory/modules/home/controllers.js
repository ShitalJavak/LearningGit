'use strict';
 
angular.module('Home')
 
.controller('HomeController',
    ['$scope','$location',
    function ($scope,$location) {
    	alert("redirecting");
    	 $location.path("/Accounts");
      
    }]);