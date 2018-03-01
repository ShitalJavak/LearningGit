'use strict';

// declare modules
var app = angular.module('ProjectInventory', ['ngRoute','ngCookies']);
//angular.module('Home', []);
//angular.module('Account',[]);

app.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=utf-8";
    $httpProvider.defaults.headers.post["Content-Type"] = "application/json";
    $httpProvider.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
    $httpProvider.defaults.headers.common['Access-Control-Allow-Headers'] = '*';
    $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    $httpProvider.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET,POST,PUT,HEAD,DELETE,OPTIONS';

}]);
 
app.config(['$routeProvider', function ($routeProvider) {
debugger;
    $routeProvider
        .when('/login', {
            controller: 'LoginController',
            templateUrl: 'Login/login.html',
            hideMenus: true
        })
     /*   .when('/', {
            controller: 'HomeController',
            templateUrl: 'modules/home/views/home.html'
        })*/
         .when('/Home', {
            //controller: 'HomeController',
            templateUrl: 'Accounts/Home.html'
        })
        .when('/Accounts', {
        	 controller: 'AccountsController',
        templateUrl: 'Accounts/AccountDetails.html'       
        })  
     /*    .when('/TileAccounts', {
        	 controller: 'AccountTileController',
        templateUrl: 'Accounts/AccountTile.html'       
        }) */
        .when("/NewAccount", {
            templateUrl: "Accounts/AccountInsert.html",
            controller: "AccountsController"
        })
       .when("/ModifyAccount/:_id", {
            templateUrl: "Accounts/AccountModify.html",
            controller: "AccountsController"
        })
        .when("/Towers", {
        templateUrl: "Towers/TowerDetails.html" ,   
         	 controller: "TowersController"             
        })
        .when("/ModifyTower/:towerId", {
            templateUrl: "Towers/TowerModify.html",
            controller: "TowersController"
        })
        .when("/NewTower", {
            templateUrl: "Towers/TowerInsert.html",
            controller: "TowersController"
        })
 
        .otherwise({ redirectTo: '/login' });
}])
.run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
	debugger; 
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }
 debugger;
    $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
    	//alert("Inside location ON ::::::::"+(!$rootScope.globals.currentUser)+"        PATH  ========>"+$location);
            if ( !$rootScope.globals.currentUser) {
            	//alert("Inside location ON after ::::::::"+(!$rootScope.globals.currentUser)+"        PATH ==========>"+$location);
                
                $location.path('/login');
            }
        }); 
    }]); 