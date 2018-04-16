'use strict';

app.controller('IndustryTileController', function($scope, industryUserService, $log,
		$routeParams, $location, $window, $rootScope) {

	// if you get Role as Sector lead then show list of industries
	var industries = function(data) {
		console.log("INDUSTRY DATA :::"+data);
		$scope.industries = [];
		debugger;
		angular.forEach(data, function(value, key) {
			$scope.industries.push({
				src : '../img/logos/'+value.industryImage+'.jpg', // TODO : Add industryImage name
				name : value.industryName,
				desc : value.industryDesc,
				industryId : value.industryId
			});
		
		})

		$scope.myInterval = 2000;
		$scope._Index = 0;

	};

	// if you get Role as Super User then show sector details and show list of industries for given sector
	var IndustriesForSector = function(data) {
		console.log("IndustriesForSector ::"+data);
		$scope.industries = [];		
		$scope.sectors = [];
		debugger;
		var sectorsData = data.sectorDetails;
		var industryData = data.industrydetails;
		debugger;
		
		 angular.forEach(sectorsData,function(value,key){
			 debugger;
             $scope.sectors.push({src: '../img/logos/'+value.sectorImage+'.jpg',
            	                 name:value.sectorName,
            	                 desc:value.sectorDesc,
            	                 sectorLead:value.sectorLeadName,
            	                 sectorLeadContact:value.sectorLeadPhoneNo,
            	                 sectorLeadEmail:value.sectorLeadEmailId
            	                 
            	                 });
					 
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
		console.log("Indside init industries!!"+$routeParams.sectorId);
		industryUserService.IndustriesForSector($routeParams.sectorId).then(IndustriesForSector);

	};


	var sector = {
			sectorId : null,
			sectorName : null,
			sectorLeadName : null,
			sectorLeadEmailId : null,
			sectorLeadPhoneNo : null,
			sectorCreatedBy : null,
			sectorCreatedOn : null,
			sectorLastModifyBy : null,
			sectorLastModifyOn : null,
			sectorImage : null,
			sectorDesc : null,
		   type : null,
			_id : null,
			_rev : null
	};

	$scope.sector = sector;
	
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

	var refresh = function() {
		console.log("Inside industry refresh");
		industryUserService.userIndustry($rootScope.userId,$rootScope.userRole)
				.then(industries);
		console.log("after");
		debugger;

	};

	
	if($routeParams.sectorId == null){
	console.log("Sector Id is NULL ::");
	console.log("Logged with Industry lead")
	refresh();
	}
	
});
