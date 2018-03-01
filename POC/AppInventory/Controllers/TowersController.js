(function () {
	alert("inside controller");
    var TowersController = function ($scope, towerService,$log,$routeParams,$location) {
        alert("inside var");
    	var towers = function (data) {
    		alert('Display towers :::'+data);
    		 $scope.Towers = data;
            $log.info(data);
        };
             
        var tower = {
        		towerAccountId:null,
        		towerId:null,
        		type:null,
        		towerName:null,
        		towerDMName:null,
        		towerDMEmail:null,
        		towerTeam:null,
        		towerCreatedBy:null,
        		towerCreateDate:null,
        		towerModifiedBy:null,
        		towerModifiedDate:null,
        		_id:null,
        		_rev:null
        };
        
        var singleTower = function (data) {
        	$scope.existingTower = data[0];
            debugger;
            alert("existing tower is "+$scope.existingTower);
          $log.info(data);
        };
        
        $scope.modifyTower = function (existingTower) {
        	alert("inside modify tower");
        	debugger;
            $log.info(existingTower);
            towerService.modifyTower(existingTower)
                .then(function () {
                    $location.path("/Towers");
                }, errorDetails);
        };
        
        $scope.init = function () {
        	debugger;
        	alert("insde tower init");
        	towerService.singleTower($routeParams.towerId)
                .then(singleTower, errorDetails);
            
        };
        
        $scope.listOfAccountId = function () {
        	debugger;
        	alert("insde listOfAccountId");
        	towerService.singleTower($routeParams.towerId)
                .then(singleTower, errorDetails);
            
        };
        
        $scope.insertTower=function (tower) {
        	alert("inside insertTower controller");
        	towerService.insertTower(tower)
                .then(function (data) {
                	alert("after insert succesful");
                    console.log(data);
                    $location.path("/Towers");
                });
        };
        
        $scope.deleteTower = function (tower) {
            $log.info(tower);
            towerService.deleteTower(tower)
            .then(function () {
            	 $location.path("/Towers");
            }, errorDetails);
        };
        

        $scope.tower = tower;
        
        var errorDetails = function (serviceResp) {
            $scope.Error = "Something went wrong ??";
        };
      
        var refresh = function () {
        	alert("inside refresh of tower");
        	towerService.towers()
                .then(towers, errorDetails);
        	
        };

        refresh();
        $scope.Title = "Tower Details Page";
    };
    angular.module('ProjectInventory').controller("TowersController", ["$scope", "towerService", "$log", "$routeParams", "$location", TowersController]);
}());