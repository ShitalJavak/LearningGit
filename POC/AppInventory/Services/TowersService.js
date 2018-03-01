(function () {
    var towerService = function ($http, $q, $log) {
        var cachedTowers;
     	alert("Inside Tower Service");
        var towers = function () {
            if (cachedTowers)
                return $q.when(cachedTowers);
          //	alert("Inside calling URL"); //appnodejscloudant1.au-syd.mybluemix.net/api/getByType?type=account
            return $http.get("http://localhost:3000/api/getByTowerType?type=tower") //http://9.193.21.28:3000/api/getByType?type=account 
                        .then(function (serviceResp) {
                         	alert("After hit");
                            cachedTowers = serviceResp.data;
                            alert("DATA ::"+serviceResp.data)
                            console.log(serviceResp.data);
                            return serviceResp.data;
                        });
        };
        
        var singleTower = function (id) {
     	   alert("inside singleTower in towerService");
     	   alert("id is "+id);
             return $http.get("http://localhost:3000/api/getByTowerType?type=tower")
                         .then(function (serviceResp) {
                             return serviceResp.data;
                             
                         });
         };
        
        var modifyTower = function (tower) { //appnodejscloudant1.au-syd.mybluemix.net//api/updateAccount 
            return $http.put("http://localhost:3000/api/updateTower", tower)
            .then(function (result) {
                $log.info("Update Successful");
                cachedTowers = null;
                
                return;
            });
        };
        
        var insertTower = function (tower) {
        	alert("inside insertTower service");
            return $http.post("http://localhost:3000/api/createTower", tower) //appnodejscloudant1.au-syd.mybluemix.net/api/createAccount
            .then(function (result)
            { //http://9.193.21.28/api/createAccount
            	$log.info("Insert Successful");
                cachedTowers = null;
                return result;
            });
        };
        
        var deleteTower = function (tower) {
            return $http.delete("http://localhost:3000/api/delete?id="+tower._id)
            .then(function (result) {
                $log.info("Delete Successful");
                cachedTowers = null;
                return result.data;
            });
        };
        
        
       
        return {
        	towers: towers,
        	singleTower: singleTower,
        	modifyTower: modifyTower,
        	deleteTower: deleteTower,
        	insertTower: insertTower
            
        };
    };

    var module = angular.module("ProjectInventory");

    module.factory("towerService", ["$http", "$q", "$log", towerService]);
}());