(function () {
	var mylocal = "http://localhost:3000/api/";
	var dlocal = "https://9.193.21.85:3000/api/";
	var Bluemix = "https://restcloudantservice.au-syd.mybluemix.net/api/";
    var industryUserService = function ($http, $q, $log) {
       
        var userIndustry = function (user,role) {
     	 	console.log("Inside Industry service ::"+role);
     	 	 console.log("NODE Service URL :::"+Bluemix+"getUserDetailsByRole?user="+user+"&userRole="+role);
        	return $http.get(Bluemix+"getUserDetailsByRole?user="+user+"&userRole="+role) 	
                         .then(function (serviceResp) {
                        	/* console.log("NODE Service URL :::"+Bluemix+"getUserDetailsByRole?user="+user+"&userRole="+role);
                        	 console.log("USER role :::"+Bluemix+"getUserDetailsByRole?user="+user+"&userRole="+role);
                        	 debugger;
                        	 console.log("INDUSTRY DETAILS :::"+serviceResp.data.docs);*/
                        	  return serviceResp.data.docs; 
                         });
         };
         
         
         var IndustriesForSector = function (sectorId) {
         console.log("Inside industries With sector service ::"+Bluemix+"getIndustriesWithSectorBySectorId?sectorId="+sectorId);
     	 console.log("Inside industries With sector service ::"+Bluemix+"getIndustriesWithSectorBySectorId?sectorId="+sectorId);
        	 return $http.get(Bluemix+"getIndustriesWithSectorBySectorId?sectorId="+sectorId) ///api/getByid  //"http://localhost:3000/api/getByType?type=account"
                         .then(function (serviceResp) {
                        	 console.log(serviceResp.data);
                             return serviceResp.data;
                         });
         };
		     
        return {
        	userIndustry:userIndustry,
        	IndustriesForSector :IndustriesForSector
        };
    };

    var module = angular.module("ProjectInventory");
    debugger;
    module.factory("industryUserService", ["$http", "$q", "$log", industryUserService]);
}());