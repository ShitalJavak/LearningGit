(function () {
	var mylocal = "http://localhost:3000/api/";
	var dlocal = "https://9.193.21.85:3000/api/";
	var Bluemix = "https://restcloudantservice.au-syd.mybluemix.net/api/";
    var sectorUserService = function ($http, $q, $log) {
       
        var userSector = function (userId,role) {
        	console.log("Inside sector service ::"+role);
     	 	console.log("Inside sector service ::"+role);
     	 	console.log("Bluemix :::>>>>"+Bluemix+"getUserDetailsByRole?user="+userId+"&userRole="+role);
        	return $http.get(Bluemix+"getUserDetailsByRole?user="+userId+"&userRole="+role) 	
                         .then(function (serviceResp) {
                        	 console.log("NODE Service URL :::"+Bluemix+"getUserDetailsByRole?user="+userId+"&userRole="+role);
                        	// console.log("USER role :::"+Bluemix+"getUserDetailsByRole?user="+userId+"&userRole="+role);
                        	 debugger;
                        	 console.log("SECTOR DETAILS :::"+serviceResp.data.docs);
                        	  return serviceResp.data.docs; 
                         });
         };
		     
        return {
        	userSector:userSector
        };
    };

    var module = angular.module("ProjectInventory");
    debugger;
    module.factory("sectorUserService", ["$http", "$q", "$log", sectorUserService]);
}());