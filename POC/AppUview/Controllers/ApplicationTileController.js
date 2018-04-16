'use strict';

app.controller('ApplicationTileController', function ($scope, applicationTileService,$log,$routeParams,$location, $rootScope) {

	
	// if you get Role as Application Area lead then show list of applications
		var applications = function(data) {
			$scope.applications = [];
			debugger;
			angular.forEach(data, function(value, key) {
				$scope.applications.push({src: '../img/logos/'+value.applicationImage+'.jpg',
	                 name:value.applicationName,
	                 desc:value.applicationDescription,
	                 applicationId:value.applicationID});
			})
			$scope.myInterval = 2000;
			$scope._Index = 0;
		};
	
		// if you get Role as portfolio lead then show application group details and show list of applications for given application group id			
	var applicationsforAppGroup = function (data) {
				$scope.applications = [];		
				$scope.appGroups = [];
				debugger;
		
				var applicationdata = data.applicationdetails;
				var appGroupdata = data.teamDetails;
				debugger
				 angular.forEach(applicationdata,function(value,key){
					 debugger;
		             $scope.applications.push({src: '../img/logos/'+value.applicationImage+'.jpg',
		            	                 name:value.applicationName,
		            	                 desc:value.applicationDescription,
		            	                 applicationId:value.applicationID});
							 
		         })
		         
		     	 angular.forEach(appGroupdata,function(value,key){
				 debugger;
		         $scope.appGroups.push({src: '../img/logos/'+value.teamImage+'.jpg',
		        	 name : value.teamName,
					desc : value.teamDesc,
					teamId : value.teamId,
					LeadName:value.teamLeadName,
					LeadPhone:value.teamLeadPhoneNo,
					teamLeadEmail:value.teamLeadEmail					
		         	});
							 
		         })
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

    
   
    var application = {
			applicationName : null,
			applicationID :null, 
			applicationDescription :null,
			applicationTeamId :null,
			towerId :null,
			accountId :null,
			industryId :null,
			sectorId :null,
			applicationSrNo :null,
			applicationImage :null,
			applicationGroup :null,
			applicationTierClassification :null,
			buildVendor :null,
			supportQueueName :null,
			confItemsInsupportGroup :null,
			primarySupportPerson :null,
			SMELocation :null,
			SMENameAndMailID :null,
			SMEContactDetails :null,
			applicationLead :null,
			applicationLeadMailID :null,
			applicationLeadContactNo :null,
			applicationManager :null,
			applicationMgrMailID :null,
			applicationMgrContactNo :null,
			DMName :null,
			DMMailID :null,
			DMContactNumber :null,
			onsiteBAMName :null,
			onsiteBAMMailID :null,
			onsiteBAMContactNo :null,
			offshoreArchitectName :null,
			offshoreArchitectMailID :null,
			offshoreArchitectContactNo :null,
			deliveryLeadName :null,
			deliveryLeadMailID :null,
			deliveryLeadContactNumber :null,
			clientDeliveryMgrName :null,
			clientDeliveryMgrMailID :null,
			clientDeliveryMgrContactNo :null,
			clientPortfolioMgr :null,
			clientPortfolioMgrMailID :null,
			clientPortfolioMgrContact :null,
			clientApplicationMgr :null,
			clientApplicationMgrMailID :null,
			clientApplicationMgrContact :null,
			clientBUILD :null,
			responsibleName :null,
			responsibleContact :null,
			applicationSupportScope :null,
			GTSSAMName :null,
			GTSSAMMailID :null,
			GTSSAMContactNo :null,
			sourceCodeAvailable :null,
			sourceTested :null,
			sourceCodeServer :null,
			sourceCodeLocation :null,
			sourceCodePath :null,
			reasonForNothavingSourceCode :null,
			DBMSused :null,
			DBMSVersion :null,
			DBMSPlatform :null,
			AIDStatus :null,
			AIDTADAvailableInOKMS :null,
			primarySkills :null,
			secondarySkill :null,
			primaryConnectivity :null,
			seconadaryConnectivity :null,
			tertiaryConnectivity :null,
			NoofSolutionsArticles :null,
			lastReviewDateforSolutionArticle :null,
			applicationAccessMode :null,
			applicationHealthMonitoringTool :null,
			Remarks :null,
			applicationNature :null,
			applicationLocation :null,
			SOI :null,
			SOR :null,
			SOD :null,
			virtualized :null,
			physicalCoresCount :null,
			physicalRAM :null,
			storageAmountTB :null,
			storageType :null,
			dataCenterGeography :null,
			documenationAvailability :null,
			contactForDocumentation :null,
			documentationLinkToBox :null,
			SLA :null,
			externalDependencies :null,
			regulatoryRequirements :null,
			platformNames :null,
			devopsEnabled :null,
			devopsTechnology :null,
			devopsPossibility :null,
			devopsPlan :null,
			dataSharedWithPartners :null,
			partnersInvolved :null,
			dataSensitivity :null,
			impactOfDataBreach :null,
			microservicesEnabled :null,
			microservicesCount :null,
			microservicesTechnology :null,
			containerType :null,
			clusterType :null,
			cognitiveEnabled :null,
			cognitiveTechnology :null,
			cognitiveDescription :null,
			voiceUi :null,
			cognitivePlan :null,
			keyUserPain :null,
			anyDowntime :null,
			frequentIssues :null,
			majorBusinessCriticalIncident :null,
			AMSCost :null,
			causeOfHighAMSCost :null,
			costOfChange :null,
			causeofHighCostChange :null,
			numberOfLayers :null,
			applicationLayers :null,
			coueplingOfLayers :null,
			canbeBrokeninParts :null,
			costofBreaking :null,
			valueAddOfBreaking :null,
			applicationCreatedBy :null,
			applicationCreatedOn :null,
			applicationLastModifyBy :null,
			applicationLastModifyOn :null,
			type : null,
			value : null,
			_id : null,
			_rev : null

	};

	$scope.application = application;

	$scope.init = function() {
		console.log("Application group value ::"+$routeParams.appGrpId);
		console.log("Application group value ::"+$routeParams.appGrpId);
		applicationTileService.getApplicationsByAppGrpId($routeParams.appGrpId).then(applicationsforAppGroup);

	}; 

	
	
    var refresh = function () {  
    	console.log("Fetching application for logged in application area Lead");
    	console.log("Fetching application for logged in application area Lead");
    	debugger;
    	applicationTileService.userApplications($rootScope.userId,$rootScope.userRole)
			.then(applications);
        	
        };
        
    	
	if($routeParams.appGrpId == null){
		debugger;
		console.log("application group Id value is NULL::");
	console.log("application group Id value is NULL::");
	refresh();
	}

      
});

