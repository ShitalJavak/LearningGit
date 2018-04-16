'use strict';

app.controller('SectorTileController', function($scope, sectorUserService, $log,
		$routeParams, $location, $window, $rootScope) {

	var sectors = function(data) {
		$scope.sectors = [];
		debugger;
		angular.forEach(data, function(value, key) {
			$scope.sectors.push({
				src : '../img/logos/'+value.sectorImage+'.jpg', 
				name : value.sectorName,
				desc : value.sectorDesc,   
				sectorId : value.sectorId
			});
		
		})

		$scope.myInterval = 2000;
		$scope._Index = 0;

	};

	var sector = {
			sectorId : null,
			sectorName : null,
			sectorLeadName : null,
			sectorLeadEmailId : null,
			sectorLeadPhoneNo : null,
			sectorCreatedBy : null,
			sectorCreatedOn : null,
			sectorLastModifyBy : null,
			sectorLastModifyOn : null,
			sectorImage : null,
			sectorDesc : null,
		   type : null,
			_id : null,
			_rev : null
	};

	$scope.sector = sector;

	var refresh = function() {
		console.log("Inside sector service");
	
		console.log("Inside sector service");
		sectorUserService.userSector($rootScope.userId,$rootScope.userRole)
				.then(sectors);

	};

	refresh();
});
