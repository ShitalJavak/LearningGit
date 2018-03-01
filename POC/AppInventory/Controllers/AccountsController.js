(function () {
    var AccountsController = function ($scope, accountService,$log,$routeParams,$location, $rootScope) {
    	debugger;
    	var accounts = function (data) {
    		//alert('Display account :::'+data)
    		 $scope.Accounts = data;
            $log.info(data);
        };
        
   
        var singleAccount = function (data) {
        	//alert("Single Account :::"+data);
          $scope.existingAccount = data;
            debugger;
              $log.info(data);
        };
        	
        $scope.init = function () {
        	alert("Account ID :::"+$routeParams._id);
            accountService.singleAccount($routeParams._id)
                .then(singleAccount, errorDetails);
            
        };
        
       

        var account = {
        		accountId:null,
        		accountName:null,
        		accountPal:null,
        		accountSector:null,
        		name:null,
        		type:null,
        		value:null,
        		_id:null,
        		_rev:null
        };

        $scope.account = account;
        
        var errorDetails = function (serviceResp) {
            $scope.Error = "Something went wrong ??";
        };

      $scope.insertAccount=function (account) {
    		//alert("INSERT ::: insertAccount");
            
            accountService.insertAccount(account)
                .then(function (data) {
                    //alert("Insert "+data);
                     if(data == 'OK')
                    	$scope.Response = "Account inserted successfully!"
                    $location.path("/Accounts");
                });
        };

        $scope.modifyAccount = function (existingAccount) {
        	debugger;
        	//alert("MODIFY ACCOUNT");
            
            
            $log.info(existingAccount);
            accountService.modifyAccount(existingAccount)
                .then(function () {
                	 $location.path("/Accounts");
                }, errorDetails);
        };

        $scope.deleteAccount = function (account) {
            $log.info(account);
        	alert("DELETE ACCOUNT CONTROLLER");
            
            accountService.deleteAccount(account)
                .then(function () {
                	alert("INSIDE SUCCESS DELETE ACCOUNT");
                	   refresh();
                	 $location.path("/Accounts");
                }, errorDetails);
        };

        var refresh = function () {
        //	//alert("Inside Account Controller"+$rootScope.globals.currentUser);
        	//alert("Inside Refresh");
        	debugger;
        	accountService.accounts()
                .then(accounts, errorDetails);
        	
        };

        refresh();
        $scope.Title = "Account Details Page";
    };
    debugger;
    angular.module('ProjectInventory').controller("AccountsController", ["$scope", "accountService", "$log", "$routeParams", "$location","$rootScope", AccountsController]);
}());