'use strict';

app.controller('AccountTileController', function($scope, accountUserService, $log,
		$routeParams, $location, $window, $rootScope) {

	
	// if you get Role as Industry lead then show list of accounts
	var accounts = function(data) {
		$scope.accounts = [];
		debugger;
		angular.forEach(data, function(value, key) {
			$scope.accounts.push({
				src : '../img/logos/'+value.accountImage+'.jpg', // TODO : Add AccountImage name
				name : value.accountName,
				desc : value.accountDesc,
				accId : value.accountId
			});
		
		})

		$scope.myInterval = 2000;
		$scope._Index = 0;

	};
	
	// if you get Role as sector lead then show Industry details and show list of accounts for given industry
	var accountsForIndustry = function(data) {
console.log("ACCOUNT for INDUSTRY ID ::;"+data)
		$scope.industries = [];		
		$scope.accounts = [];
		debugger;
		var accountsData = data.accountdetails;
		var industryData = data.industryDetails;
		debugger;
		
		 angular.forEach(accountsData,function(value,key){
			 debugger;
             $scope.accounts.push({src: '../img/logos/'+value.accountImage+'.jpg',
            	                 name:value.accountName,
            	                 desc:value.accountDesc,
            	                 accountId:value.accountId});
					 
         })
         
     	 angular.forEach(industryData,function(value,key){
		 debugger;
         $scope.industries.push({src: '../img/logos/'+value.industryImage+'.jpg',
        	 name : value.industryName,
			desc : value.industryName,
			industryId : value.industryId,
			lead:value.industryLeadName,
			leadEmail:value.industryLeadEmailId,
			leadNum:value.industryLeadPhoneNo 				
        });
             
            					 
         })
   
	};

	$scope.init = function() {
		debugger;
		console.log("Industry Id VAlue ::"+$routeParams.industryId);
		console.log("Indside inside Account init");
		accountUserService.accountsForIndustry($routeParams.industryId).then(accountsForIndustry);

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

	var industry = {
			  _id: null,
			  _rev: null,
			  industryId : null,    		
				type: null,    		
				industryName:null, 
				industryDesc:null,
				industrySectorId:null,
				industrySectorName:null,
				industryLeadName:null,
				industryLeadEmailId:null,
				industryLeadPhoneNo:null,
				industryCreatedBy:null,    		
				industryCreatedOn:null,    		
				industryLastModifyBy:null,    		
				industryLastModifyOn:null,		
				industryImage:null
			} 
	
	$scope.industry = industry;	
	
	$scope.account = account;
	
	
		
	var refresh = function() {
		console.log("Fetching accounts for logged in Industry Lead");
    	console.log("Fetching accounts for logged in Industry Lead");
		accountUserService.userAccount($rootScope.userId,$rootScope.userRole)
				.then(accounts);

	};
	
	if($routeParams.industryId == null){
		console.log("Industry Id VAlue null");
	console.log("Logged with Industry lead")
	refresh();
	}
});
