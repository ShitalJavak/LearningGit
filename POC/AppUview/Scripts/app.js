var app = angular.module('ProjectInventory', ['ngRoute','ui.bootstrap','ngCookies']);
app.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=utf-8";
    $httpProvider.defaults.headers.post["Content-Type"] = "application/json";
    $httpProvider.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
    $httpProvider.defaults.headers.common['Access-Control-Allow-Headers'] = '*';
    $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    $httpProvider.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET,POST,PUT,HEAD,DELETE,OPTIONS';

}]);
app.config(function ($routeProvider) {
	debugger;
    $routeProvider
    
         .when("/appDetails", {
           templateUrl: "Applications/ApplicationInDetails.html",
           controller: "ApplicationsController"
       })
      .when("/login", {
    	   templateUrl: "Login/login.html",
           controller: "LoginController",
        })
        // if logged in with Super User, show list of sector with carousel
        .when("/TileSectors", {
        	templateUrl: "Sector/SectorTileList.html", 
        	 controller: "SectorTileController"         
        }) // show industry details with all industries related to that 
        .when("/SectorIndustries/:sectorId", {
            templateUrl: "Sector/SectorIndustryList.html",
            controller: "IndustryTileController"
        })
         // for Industries
        // if logged in with sector lead ,show list of industries with carousel
        .when("/TileIndustries", {
        	templateUrl: 'Industry/IndustryTileList.html', 
        	 controller: 'IndustryTileController'         
        }) // show industry details with all accounts related to that 
        .when("/IndustryAccounts/:industryId", {
            templateUrl: "Industry/IndustryAccountList.html",
            controller: "AccountTileController"
        })
        
         // for Accounts
        .when("/TileAccounts", {
        	templateUrl: 'Accounts/AccountTileList.html', 
        	 controller: 'AccountTileController'         
        })
        .when("/AcctPortfolios/:accountId", {
            templateUrl: "Accounts/AccountPortfolioList.html",
            controller: "PortfolioTileController"
        })
        
         // for Portfolioes
        .when('/TilePortfolios', {
        	templateUrl: 'Portfolio/PortfolioTileList.html', 
        	 controller: 'PortfolioTileController'         
        })
        .when('/PortfolioApplicationGrps/:towerId', {
        	templateUrl: 'Portfolio/PortfolioApplicationGrpsList.html', 
        	 controller: 'ApplicationGroupsTileController'         
        })
        
        // for application group
         .when('/TileApplicationGroups', {
        	templateUrl: 'ApplicationGroups/ApplicationGrpsTileList.html', 
        	 controller: 'ApplicationGroupsTileController'         
        })
        .when('/ApplicationGrpApplications/:appGrpId', {
        	templateUrl: 'Applications/ApplicationGrpApplicationsList.html', 
        	 controller: 'ApplicationTileController'         
        })
        
        // for applications
          .when('/TileApplications', {
        	templateUrl: 'Applications/ApplicationsTileList.html', 
        	 controller: 'ApplicationTileController'         
        })
        // application details
         .when('/applicationDetails/:applicationId', {
        	 templateUrl: 'Applications/NavigationFix.html',
        	//templateUrl: 'Applications/ApplicationGrpApplicationsList.html', 
        	 controller: 'ApplicationsController'         
        })
        
       /* .when('/ApplicationGrpApplicationdetail/:applicationGrpId', {
        	templateUrl: 'ApplicationGrps/AppGrpApplicationsList.html', 
        	 controller: 'ApplicationsController'         
        })
        */
       
        .otherwise({redirectTo:"/login"})
})
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
            if ( !$rootScope.globals.currentUser) {
                $location.path('/login');
            }
        }); 
    }]); 
