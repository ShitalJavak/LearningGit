(function () {
    var portfolioService = function ($http, $q, $log) {
        var cachedTowers;
     	var mylocal = "http://localhost:3000/";
    	var dlocal = "http://9.193.21.28:3000/api/";
     	var Bluemix = "http://restcloudantservice.au-syd.mybluemix.net/api/";
        
     	
     	  var userPortfolios = function (user,role) {
          	return $http.get(Bluemix+"getUserDetailsByRole?user="+user+"&userRole="+role) //http://9.193.21.28:3000/api/getByType?type=account 
                          .then(function (serviceResp) {
                        	  console.log("BLUEMIX URL :::"+Bluemix+"getUserDetailsByRole?user="+user+"&userRole="+role);
                         	 debugger;
                         	 console.log("PORTFOLIO DETAILS :::"+serviceResp.data.docs);
                          	//cachedAccounts = serviceResp.data.docs;
                              console.log(serviceResp.data.docs);
                              return serviceResp.data.docs;
                          });
          };
          
        
        
        var getPortfoliosByAccId = function (acctId) { 
       	       return $http.get(Bluemix+"getTowerByAccount?id="+acctId) ///api/getByid  //"http://localhost:3000/api/getByType?type=account"
                           .then(function (serviceResp) {
                          	 debugger;
                          	   return serviceResp.data;
                           });
           };
  		
          
        
      
        
      
        
       
        return {
        	
        	getPortfoliosByAccId:getPortfoliosByAccId,
        	userPortfolios:userPortfolios
            
        };
    };

    var module = angular.module("ProjectInventory");

    module.factory("portfolioService", ["$http", "$q", "$log", portfolioService]);
}());