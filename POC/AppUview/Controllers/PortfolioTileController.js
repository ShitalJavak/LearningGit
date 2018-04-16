'use strict';

app.controller('PortfolioTileController', function ($scope, portfolioService,$log,$routeParams,$location, $rootScope) {

	 var tileAccounts =[];
   
	// if you get Role as account lead then show list of portfolios
		var portfolios = function(data) {
			$scope.portfolios = [];
			debugger;
			angular.forEach(data, function(value, key) {
				$scope.portfolios.push({src: '../img/logos/'+value.towerName+'.jpg',
	                 name:value.towerName,
	                 desc:value.towerDesc,
	                 towerId:value.towerId});
			})
			$scope.myInterval = 2000;
			$scope._Index = 0;
		};
	
		// if you get Role as industry lead then show account details and show list of portfolios for given account			
	var portfolioesforAccount = function (data) {
				$scope.portfolios = [];		
				$scope.accounts = [];
				debugger;
		
				var portfoliodata = data.towerdetails;
				var accountdata = data.accountDetails;
				debugger
				 angular.forEach(portfoliodata,function(value,key){
					 debugger;
		             $scope.portfolios.push({src: '../img/logos/'+value.towerName+'.jpg',
		            	                 name:value.towerName,
		            	                 desc:value.towerDesc,
		            	                 towerId:value.towerId});
							 
		         })
		         
		     	 angular.forEach(accountdata,function(value,key){
				 debugger;
		         $scope.accounts.push({src: '../img/logos/'+value.accountImage+'.jpg',
		        	 name : value.accountName,
					desc : value.accountDesc,
					accId : value.accountId,
					pal:value.accountPalName,
					palEmail:value.accountPalEmailId,
					palNum:value.accountPalPhoneNo,
					sector:value.accountSectorName,
					industry:value.accountIndustryName
		         	});
							 
		         })
    };
    
    
    var tower = {
    		towerAccountId:null,
    		towerId : null,
    		type:null,
    		towerName:null,
    		towerDesc:null,
    		towerDMName:null,
    		towerDMEmail:null,
    		towerCreatedBy:null,
    		towerCreatedOn:null,
    		towerLastModifyBy:null,
    		towerClientManagerEmail:null,
    		towerClientManagerPhoneNo:null,
    		towerLastModifyOn:null,
    		towerImage:null,
    		towerGeoDMPhoneNo:null,
    		towerDMPhoneNo:null,
    		towerDescription:null,
    		towerGeoDMName:null,
    		towerGeoDMEmail:null,
    		towerGeoBAMName:null,
    		towerGeoBAMEmail:null,
    		towerGeoBAMPhoneNo:null,
    		towerClientManagerName:null 
    };
    
   
	var account = {
			  _id: null,
			  _rev: null,
			  accountId : null,
	    		type: null,
	    		accountName:null,
	    		accountDesc:null,
	    		accountSectorName:null,
	    		accountSectorID:null,
	    		accountPalName:null,
	    		accountCreatedBy:null,
	    		accountCreatedOn:null,
	    		accountLastModifyBy:null,
	    		accountLastModifyOn:null,
	    		accountImage:null,
	    		accountGeoInfo:null,
	    		accountClientLocation:null,
	    		accountClientWebsite:null,
	    		accountIndustryName:null,
	    		accountIndustryID:null,
	    		accountOnsiteLocation:null,
	    		accountPalEmailId:null,
	    		accountPalPhoneNo:null 
			} ;
    
	$scope.account = account;
	$scope.tower = tower;

	$scope.init = function() {
		console.log("Account ID value ::"+$routeParams.accountId);
		portfolioService.getPortfoliosByAccId($routeParams.accountId).then(portfolioesforAccount);

	}; 

	
	
    var refresh = function () {  
    	console.log("Fetching portfolio for logged in portfolio Lead");
    	console.log("Fetching portfolio for logged in portfolio Lead");
    	debugger;
    	portfolioService.userPortfolios($rootScope.userId,$rootScope.userRole)
			.then(portfolios);
        	
        };
        
    	
	if($routeParams.accountId == null){
		debugger;
		console.log("portfolio Id value is NULL::");
	console.log("Logged with portfolio Lead");
	refresh();
	}

      
});

