(function () {
    var portfolioService = function ($http, $q, $log) {
        var cachedTowers;
     	var mylocal = "http://localhost:3000/";
    	var dlocal = "http://9.193.21.28:3000/api/";
     	var Bluemix = "http://restcloudantservice.au-syd.mybluemix.net/api/";
        
     	
     	  var userapplicationGroups = function (user,role) {
          	return $http.get(Bluemix+"getUserDetailsByRole?user="+user+"&userRole="+role) //http://9.193.21.28:3000/api/getByType?type=account 
                          .then(function (serviceResp) {
                        	  console.log("APPLICATION GROUP BLUEMIX URL :::"+Bluemix+"getUserDetailsByRole?user="+user+"&userRole="+role);
                         	 debugger;
                         	 console.log("APPLICATION GROUP DETAILS :::"+serviceResp.data.docs);
                          	//cachedAccounts = serviceResp.data.docs;
                              console.log(serviceResp.data.docs);
                              return serviceResp.data.docs;
                          });
          };
          
        
        
        var getApplicationGroupsByPortfoilioId = function (portfoiliId) { 
        	console.log("BLUEMIX URL::::"+Bluemix+"getTeambyTower?id="+portfoiliId);
       	       return $http.get(Bluemix+"getTeambyTower?id="+portfoiliId) ///api/getByid  //"http://localhost:3000/api/getByType?type=account"
                           .then(function (serviceResp) {
                          	 debugger;
                          	   return serviceResp.data;
                           });
           };
  		
          
        
      
        
      
        
       
        return {
        	
        	getApplicationGroupsByPortfoilioId:getApplicationGroupsByPortfoilioId,
        	userapplicationGroups:userapplicationGroups
            
        };
    };

    var module = angular.module("ProjectInventory");

    module.factory("applicationGroupService", ["$http", "$q", "$log", portfolioService]);
}());