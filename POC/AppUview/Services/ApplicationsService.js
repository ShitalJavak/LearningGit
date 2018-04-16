(function () {
	var mylocal = "http://localhost:3000/api/";
	var dlocal = "https://9.193.21.85:3000/api/";
	var Bluemix = "https://restcloudantservice.au-syd.mybluemix.net/api/";
    var applicationService = function ($http, $q, $log) {
        var cachedApplications;
     	var applications = function () {
            if (cachedApplications)
                return $q.when(cachedApplications);
            return $http.get(Bluemix+"getByType?type=application")  
                        .then(function (serviceResp) {
                         cachedApplications = serviceResp.data.docs;
                          console.log(serviceResp.data);
                            return serviceResp.data.docs;
                        });
        };
        
        
       var singleApplication = function (id) {
    	   return $http.get(Bluemix+"getAccountbyId?id="+id) 
                        .then(function (serviceResp) {
                            return serviceResp.data;
                            
                        });
        };
        
        
        var teamApplications = function (teamId) {
     	  //alert(Bluemix+"getApplicationbyTeamId?id="+teamId);
             return $http.get(Bluemix+"getApplicationbyTeamId?id="+teamId) 
                         .then(function (serviceResp) {
                        	 debugger;
                        	   return serviceResp.data.docs;
                         });
         };
		
        
  
        var insertApplication = function (application) {
            return $http.post(Bluemix+"createApplication", application) 
            .then(function (result)
            { 
                $log.info("Insert Successful");
                debugger;
                cachedApplications = null;
                
                return result;
            });
        };

        var modifyApplication = function (application) { //appnodejscloudant1.au-syd.mybluemix.net//api/updateApplication 
            return $http.put(Bluemix+"updateApplication", application)
            .then(function (result) {
                $log.info("Update Successful");
                cachedApplications = null;
                return;
            });
        };

        var deleteApplication = function (application) {
            return $http.delete(Bluemix+"delete?id="+application._id)
            .then(function (result) {
                $log.info("Delete Successful");
                cachedApplications = null;
              return result.data;
            });
        };
        debugger;
        var getApplicationDetails = function (id) {
     	   //alert("INSIDE ::: http://restcloudantservice.au-syd.mybluemix.net/api/getApplicationById?id=APP_UPS002");  
             return $http.get(Bluemix+"getApplicationById?id=APP_UPS002") ///+id api/getByid  //"http://localhost:3000/api/getByType?type=account"
                         .then(function (serviceResp) {
                          //   return serviceResp.data;
                      
                        
                            
                         //alert("application response in service ::"+serviceResp.data);
                        // return serviceResp.data;
                         
                         //return [{"_id":"bd6f494725f27ae2607de7ff9cdf840f","_rev":"1-1581d776e68a8ccf1ef616f522fd4a0d","type":"application","id":"d2243ac484767eefd5756c235dff66e1","applicationName":"UPS application 2","applicationImage":"undefined","applicationID":"APP_UPS002","applicationDescription":"UPS application 2","applicationTeamId":"T001","towerId":"undefined","accountId":"undefined","industryId":"undefined","sectorId":"undefined","applicationSrNo":"upst002","applicationGroup":"upsappgroup","applicationTierClassification":"3","buildVendor":"IBM","supportQueueName":"undefined","confItemsInsupportGroup":"undefined","primarySupportPerson":"undefined","SMELocation":"undefined","SMENameAndMailID":"undefined","SMEContactDetails":"undefined","applicationLead":"undefined","applicationLeadMailID":"undefined","applicationLeadContactNo":"undefined","applicationManager":"undefined","applicationMgrMailID":"undefined","applicationMgrContactNo":"undefined","DMName":"undefined","DMMailID":"undefined","DMContactNumber":"undefined","onsiteBAMName":"undefined","onsiteBAMMailID":"undefined","onsiteBAMContactNo":"undefined","offshoreArchitectName":"undefined","offshoreArchitectMailID":"undefined","offshoreArchitectContactNo":"undefined","deliveryLeadName":"undefined","deliveryLeadMailID":"undefined","deliveryLeadContactNumber":"undefined","clientDeliveryMgrName":"undefined","clientDeliveryMgrMailID":"undefined","clientDeliveryMgrContactNo":"undefined","clientPortfolioMgr":"undefined","clientPortfolioMgrMailID":"undefined","clientPortfolioMgrContact":"undefined","clientApplicationMgr":"undefined","clientApplicationMgrMailID":"undefined","clientApplicationMgrContact":"undefined","clientBUILD":"undefined","responsibleName":"undefined","responsibleContact":"undefined","applicationSupportScope":"undefined","GTSSAMName":"undefined","GTSSAMMailID":"undefined","GTSSAMContactNo":"undefined","sourceCodeAvailable":"undefined","sourceTested":"undefined","sourceCodeServer":"undefined","sourceCodeLocation":"undefined","sourceCodePath":"undefined","reasonForNothavingSourceCode":"undefined","DBMSused":"undefined","DBMSVersion":"undefined","DBMSPlatform":"undefined","AIDStatus":"undefined","AIDTADAvailableInOKMS":"undefined","primarySkills":"undefined","secondarySkill":"undefined","primaryConnectivity":"undefined","seconadaryConnectivity":"undefined","tertiaryConnectivity":"undefined","NoofSolutionsArticles":"undefined","lastReviewDateforSolutionArticle":"undefined","applicationAccessMode":"undefined","applicationHealthMonitoringTool":"undefined","Remarks":"undefined","applicationNature":"undefined","applicationLocation":"undefined","SOI":"undefined","SOR":"undefined","SOD":"undefined","virtualized":"undefined","physicalCoresCount":"undefined","physicalRAM":"undefined","storageAmountTB":"undefined","storageType":"undefined","dataCenterGeography":"undefined","documenationAvailability":"undefined","contactForDocumentation":"undefined","documentationLinkToBox":"undefined","SLA":"undefined","externalDependencies":"undefined","regulatoryRequirements":"undefined","platformNames":"undefined","devopsEnabled":"undefined","devopsTechnology":"undefined","devopsPossibility":"undefined","devopsPlan":"undefined","dataSharedWithPartners":"undefined","partnersInvolved":"undefined","dataSensitivity":"undefined","impactOfDataBreach":"undefined","microservicesEnabled":"undefined","microservicesCount":"undefined","microservicesTechnology":"undefined","containerType":"undefined","clusterType":"undefined","cognitiveEnabled":"undefined","cognitiveTechnology":"undefined","cognitiveDescription":"undefined","voiceUi":"undefined","cognitivePlan":"undefined","keyUserPain":"undefined","anyDowntime":"undefined","frequentIssues":"undefined","majorBusinessCriticalIncident":"undefined","AMSCost":"undefined","causeOfHighAMSCost":"undefined","costOfChange":"undefined","causeofHighCostChange":"undefined","numberOfLayers":"undefined","applicationLayers":"undefined","coueplingOfLayers":"undefined","canbeBrokeninParts":"undefined","costofBreaking":"undefined","valueAddOfBreaking":"undefined","applicationCreatedBy":"undefined","applicationCreatedOn":"2018-03-21T09:15:51.568Z","applicationLastModifyBy":"Admin","applicationLastModifyOn":"2018-03-21T09:15:51.568Z"}]; 
                        // 		return serviceResp.data;
                         return [ {  
                             "_id":"84bdb4f94245c1c5655a123e875ae079",
                             "_rev":"1-35a669f9bb8567a6ac61cb1936e35447",
                             "type":"application",
                             "applicationName":"DASH Dev",
                             "applicationID":"DASH-13",
                             "applicationDescription":"DASH is a Web based Rental application and it’s mainly supports US region and rarely Canada. "
+"This application was known by ASAP earlier but few years back 2 car rental companies Dollar and Thrifty are acquired by Hertz and the new system designed to integrate above brands called DASH.",
                             "applicationTeamId":"APP006",
                             "towerId":"T004",
                             "accountId":"WNH0T",
                             "industryId":"T&T",
                             "sectorId":"Distribution",
                             "applicationSrNo":"004",
                             "applicationImage":"tt",
                             "applicationGroup":"P8",
                             "applicationTierClassification":"3 Tier",
                             "buildVendor":"MAVEN",
                             "supportQueueName":"SCCD",
                             "confItemsInsupportGroup":"null",
                             "primarySupportPerson":"Shital",
                             "SMELocation":"Okhlahoma",
                             "SMENameAndMailID":"manoj@in.ibm.com",
                             "SMEContactDetails":"01-222-222-8890",
                             "applicationLead":"Rahul Tewari",
                             "applicationLeadMailID":"rahul@in.ibm.com",
                             "applicationLeadContactNo":"98880-23460",
                             "applicationManager":"Smita Sharma",
                             "applicationMgrMailID":"smita@in.ibm.com",
                             "applicationMgrContactNo":"9999999999",
                             "DMName":"Smita Sharma",
                             "DMMailID":"smita@gmail.com",
                             "DMContactNumber":"98334-55000",
                             "onsiteBAMName":"Jaishree Chhabra",
                             "onsiteBAMMailID":"jai@in.ibm.com",
                             "onsiteBAMContactNo":"01-888-888-2340",
                             "offshoreArchitectName":"Utpal Bhattacharya",
                             "offshoreArchitectMailID":"utpal@in.ibm.com",
                             "offshoreArchitectContactNo":"98345-05550",
                             "deliveryLeadName":"Deepak Arora",
                             "deliveryLeadMailID":"Deepak@in.ibm.com",
                             "deliveryLeadContactNumber":"99999-33330",
                             "clientDeliveryMgrName":"James Wilber",
                             "clientDeliveryMgrMailID":"James@in.ibm.com",
                             "clientDeliveryMgrContactNo":"01-234-234-7890",
                             "clientPortfolioMgr":"Abhilit Das",
                             "clientPortfolioMgrMailID":"abhijit@in.ibm.com",
                             "clientPortfolioMgrContact":"0982343-44444",
                             "clientApplicationMgr":"null",
                             "clientApplicationMgrMailID":"null",
                             "clientApplicationMgrContact":"null",
                             "clientBUILD":"null",
                             "responsibleName":"null",
                             "responsibleContact":"null",
                             "applicationSupportScope":"null",
                             "GTSSAMName":"null",
                             "GTSSAMMailID":"null",
                             "GTSSAMContactNo":"null",
                             "sourceCodeAvailable":"null",
                             "sourceTested":"null",
                             "sourceCodeServer":"null",
                             "sourceCodeLocation":"null",
                             "sourceCodePath":"null",
                             "reasonForNothavingSourceCode":"null",
                             "DBMSused":"null",
                             "DBMSVersion":"null",
                             "DBMSPlatform":"null",
                             "AIDStatus":"null",
                             "AIDTADAvailableInOKMS":"null",
                             "primarySkills":"null",
                             "secondarySkill":"null",
                             "primaryConnectivity":"null",
                             "seconadaryConnectivity":"null",
                             "tertiaryConnectivity":"null",
                             "NoofSolutionsArticles":"null",
                             "lastReviewDateforSolutionArticle":"null",
                             "applicationAccessMode":"null",
                             "applicationHealthMonitoringTool":"null",
                             "Remarks":"null",
                             "applicationNature":"null",
                             "applicationLocation":"null",
                             "SOI":"null",
                             "SOR":"null",
                             "SOD":"null",
                             "virtualized":"null",
                             "physicalCoresCount":"null",
                             "physicalRAM":"null",
                             "storageAmountTB":"null",
                             "storageType":"null",
                             "dataCenterGeography":"null",
                             "documenationAvailability":"null",
                             "contactForDocumentation":"null",
                             "documentationLinkToBox":"null",
                             "SLA":"null",
                             "externalDependencies":"null",
                             "regulatoryRequirements":"null",
                             "platformNames":"null",
                             "devopsEnabled":"null",
                             "devopsTechnology":"null",
                             "devopsPossibility":"null",
                             "devopsPlan":"null",
                             "dataSharedWithPartners":"null",
                             "partnersInvolved":"null",
                             "dataSensitivity":"null",
                             "impactOfDataBreach":"null",
                             "microservicesEnabled":"null",
                             "microservicesCount":"null",
                             "microservicesTechnology":"null",
                             "containerType":"null",
                             "clusterType":"null",
                             "cognitiveEnabled":"null",
                             "cognitiveTechnology":"null",
                             "cognitiveDescription":"null",
                             "voiceUi":"null",
                             "cognitivePlan":"null",
                             "applicationCreatedBy":"shittal",
                             "applicationCreatedOn":"2018-03-21T10:18:58.874Z",
                             "applicationLastModifyBy":"Admin",
                             "applicationLastModifyOn":"2018-03-21T10:18:58.874Z"
                          }];

                         }); 

                             
                             
                      
         };

        return {
            applications: applications,
            singleApplication: singleApplication,
            insertApplication: insertApplication,
            modifyApplication: modifyApplication,
            deleteApplication: deleteApplication,
            teamApplications:teamApplications,
            getApplicationDetails:getApplicationDetails
        };
    };

    var module = angular.module("ProjectInventory");
    debugger;
    module.factory("applicationService", ["$http", "$q", "$log", applicationService]);
}());