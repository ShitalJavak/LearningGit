(function () {
	var mylocal = "http://localhost:3000/api/";
	var dlocal = "https://9.193.21.85:3000/api/";
	var Bluemix = "https://restcloudantservice.au-syd.mybluemix.net/api/";
    var accountUserService = function ($http, $q, $log) {
        var cachedAccounts;
   
        var userAccount = function (user,role) {
     	   //   return $http.get(Bluemix+"getUserAccounts?user="+user) 	
        	console.log("Inside account service ::"+role);
        	return $http.get(Bluemix+"getUserDetailsByRole?user="+user+"&userRole="+role) 	
                         .then(function (serviceResp) {
                        	// alert(Bluemix+"getUserAccountsByRole?user="+user+"&role="+role);
                        	 console.log("USER role :::"+Bluemix+"getUserDetailsByRole?user="+user+"&userRole="+role);
                        	 debugger;
                        	 console.log("ACCOUNT DETAILS :::"+serviceResp.data.docs);
                        	  return serviceResp.data.docs; 
                         });
         };
         
         
         var accountsForIndustry = function (industryId) {
        	 console.log("BLUMIX URL :::"+Bluemix+"getAccountsWithIndustrybyIndustryid?industryId="+industryId);
        	 console.log("BLUMIX URL :::"+Bluemix+"getAccountsWithIndustrybyIndustryid?industryId="+industryId);
      	      return $http.get(Bluemix+"getAccountsWithIndustrybyIndustryid?industryId="+industryId) ///api/getByid  //"http://localhost:3000/api/getByType?type=account"
                          .then(function (serviceResp) {
                              return serviceResp.data;
                          });
          };
		     
        return {
           userAccount:userAccount,
           accountsForIndustry:accountsForIndustry
        };
    };

    var module = angular.module("ProjectInventory");
    debugger;
    module.factory("accountUserService", ["$http", "$q", "$log", accountUserService]);
}());