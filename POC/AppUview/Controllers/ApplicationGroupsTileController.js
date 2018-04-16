'use strict';

app.controller('ApplicationGroupsTileController', function ($scope, applicationGroupService,$log,$routeParams,$location, $rootScope) {

	// if you get Role as portfolio lead then show list of applicationGroups
		var applicationGroups = function(data) {
			$scope.applicationGroups = [];
			debugger;
			angular.forEach(data, function(value, key) {
				$scope.applicationGroups.push({src: '../img/logos/'+value.teamImage+'.jpg',
	                 name:value.teamName,
	                 desc:value.teamDesc,
	                 applicationGrpId:value.teamId});
			})
			$scope.myInterval = 2000;
			$scope._Index = 0;
		};
	
		// if you get Role as Portfolio lead then show portfolio details and show list of applicationGroups for given portfolio			
	var applicationGroupsforPortfolio = function (data) {
				$scope.applicationGroups = [];		
				$scope.towers = [];
				debugger;
		console.log("Inside applicationGroups for Portfolio ")
				var applicationGroupdata = data.teamdetails;
				var towerdata = data.towerDetails;
				debugger
				 angular.forEach(applicationGroupdata,function(value,key){
					 debugger;
		             $scope.applicationGroups.push({src: '../img/logos/'+value.teamImage+'.jpg',
		            	                 name:value.teamName,
		            	                 desc:value.teamDesc,
		            	                 teamId:value.teamId});
							 
		         })
		         
		     	 angular.forEach(towerdata,function(value,key){
				 debugger;
		         $scope.towers.push({src: '../img/logos/'+value.towerImage+'.jpg',
		        	 name : value.towerName,
					desc : value.towerDesc,
					towerId : value.towerId,
					towerDMName:value.towerDMName,
					towerDMEmail:value.towerDMEmail,
					towerDMPhoneNo:value.towerDMPhoneNo
					/*sector:value.towersector,
					industry:value.towerIndustry*/
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
    
   
    var team = {
    		teamTowerId:null,
    		teamId : null,
    		type:null,
    		teamAccountId: null,
    		teamName:null,
    		teamDesc:null,
    		teamLeadName:null,
    		teamLeadPhoneNo:null,
    		teamCreatedBy:null,
    		teamCreatedOn:null,
    		teamLastModifyBy:null,
    		teamLastModifyOn:null,
    		teamImage:null,
    		teamLeadEmail:null 
    };
    
    $scope.team = team;
    
	$scope.tower = tower;

	$scope.init = function() {
		//accountUserService.towersForIndustry($routeParams.industryId).then(towersForIndustry);
		applicationGroupService.getApplicationGroupsByPortfoilioId($routeParams.towerId).then(applicationGroupsforPortfolio);

	}; 

	
	
    var refresh = function () {  
    	console.log("Fetching applicationGroup for logged in Portfolio Lead");
    	console.log("Fetching applicationGroup for logged in Portfolio Lead");
    	debugger;
    	applicationGroupService.userapplicationGroups($rootScope.userId,$rootScope.userRole)
			.then(applicationGroups);
        	
        };
        
    	
	if($routeParams.towerId == null){
		debugger;
		console.log("tower Id value ::"+$routeParams.towerId);
	console.log("Logged with portfolio lead");
	refresh();
	}

      
});

