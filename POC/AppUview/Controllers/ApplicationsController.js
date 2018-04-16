(function() {
	var ApplicationsController = function($scope, applicationService, $log,
			$routeParams, $location, $rootScope) {
		var applications = function(data) {
			$scope.Applications = data;
			$log.info(data);
		};

		var singleApplication = function(data) {
			$scope.existingApplication = data;
			$log.info(data);
		};

		$scope.init = function() {
			applicationService.singleApplication($routeParams._id).then(singleApplication,
					errorDetails);

		};

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

		var errorDetails = function(serviceResp) {
			$scope.Error = "Something went wrong ??";
		};

		$scope.insertApplication = function(application) {
			application.applicationCreatedBy = $scope.user;
			applicationService.insertApplication(application).then(function(data) {
				if (data == 'OK')
					$scope.Response = "Application inserted successfully!"
				$location.path("/Applications");
			});
		};

		$scope.modifyApplication = function(existingApplication) {
			debugger;
				$log.info(existingApplication);
			applicationService.modifyApplication(existingApplication).then(function() {
				$location.path("/Applications");
			}, errorDetails);
		};

		$scope.deleteApplication = function(application) {
			$log.info(application);
			applicationService.deleteApplication(application).then(function() {
				refresh();
				$location.path("/Applications");
			}, errorDetails);
		};
/*
		$scope.appDetails = function(account) {
			alert("SSS");
			applicationService.getApplicationDetails("APP_UPS001").then(ApplicationDetails,
					errorDetails);
		};
*/
		
		var refresh = function() {
			//alert("Inside application Controller");
			applicationService.getApplicationDetails("APP_UPS001").then(ApplicationDetails,
					errorDetails);

		};
		var ApplicationDetails = function(data) {
			//alert("Details :::"+data);
			$rootScope.existingApplicationDetails = data;
			debugger;
			$log.info(data);
		};

		$scope.loadApp = function() {
			//alert("Inside application Controller");
			applicationService.getApplicationDetails("APP_UPS001").then(ApplicationDetails,
					errorDetails);

		};
		
		refresh();
		$scope.Title = "Account Details Page";
	};
	
	

	debugger;
	angular.module('ProjectInventory').controller(
			"ApplicationsController",
			[ "$scope", "applicationService", "$log", "$routeParams", "$location",
					"$rootScope", ApplicationsController ]);
}());