(function () {
    var applicationTileService = function ($http, $q, $log) {
        var cachedTowers;
     	var mylocal = "http://localhost:3000/";
    	var dlocal = "http://9.193.21.28:3000/api/";
     	var Bluemix = "http://restcloudantservice.au-syd.mybluemix.net/api/";
        
     	
     	  var userApplications = function (user,role) {
          	return $http.get(Bluemix+"getUserDetailsByRole?user="+user+"&userRole="+role) //http://9.193.21.28:3000/api/getByType?type=account 
                          .then(function (serviceResp) {
                        	  console.log("APPLICATION  BLUEMIX URL :::"+Bluemix+"getUserDetailsByRole?user="+user+"&userRole="+role);
                         	 debugger;
                         	 console.log("APPLICATION DETAILS :::"+serviceResp.data.docs);
                          	//cachedAccounts = serviceResp.data.docs;
                              console.log(serviceResp.data.docs);
                              return serviceResp.data.docs;
                          });
          };
          
        
        
        var getApplicationsByAppGrpId = function (appgrpId) { 
        	console.log("GET APPLICATIONS BY APP GRP ID BLUMIX URL:::"+Bluemix+"getApplicationbyTeamWithApplicationGroup?id="+appgrpId);
       	       return $http.get(Bluemix+"getApplicationbyTeamWithApplicationGroup?id="+appgrpId) ///api/getByid  //"http://localhost:3000/api/getByType?type=account"
                           .then(function (serviceResp) {
                          	 debugger;
                          	   return serviceResp.data;
                           });
           };
  		
          
        
      
        
      
        
       
        return {
        	
        	getApplicationsByAppGrpId:getApplicationsByAppGrpId,
        	userApplications:userApplications
            
        };
    };

    var module = angular.module("ProjectInventory");

    module.factory("applicationTileService", ["$http", "$q", "$log", applicationTileService]);
}());