var app = angular.module('ProjectInventory', ['ngRoute', 'ui.bootstrap']);
app.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=utf-8";
    $httpProvider.defaults.headers.post["Content-Type"] = "application/json";
    $httpProvider.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
    $httpProvider.defaults.headers.common['Access-Control-Allow-Headers'] = '*';
    $httpProvider.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    $httpProvider.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET,POST,PUT,HEAD,DELETE,OPTIONS';

}]);
app.config(function ($routeProvider) {
	debugger;
    $routeProvider
        .when("/Home", {
            templateUrl: "modules/home/views/home.html"
           // controller:"HomeController"
        })
        .when("/Accounts", {
        	 controller: "AccountsController",
        templateUrl: "Accounts/AccountDetails.html"       
        })
        .when("/NewAccount", {
            templateUrl: "Accounts/AccountInsert.html",
            controller: "AccountsController"
        })
       .when("/ModifyAccount/:_id", {
            templateUrl: "Accounts/AccountModify.html",
            controller: "AccountsController"
        })
        .when('/login', {
            controller: 'LoginController',
            templateUrl: 'modules/authentication/views/login.html',
            hideMenus: true
        })
       /* .when("/UserStories", {
            templateUrl: "UserStories/UserStoryDetails.html",
            controller: "UserStoriesController"
        })
        .when("/NewUserStory", {
            templateUrl: "UserStories/UserStoryInsert.html",
            controller: "UserStoriesController"
        })
        .when("/ModifyUserStory/:userStoryID", {
            templateUrl: "UserStories/UserStoryUpdate.html",
            controller: "UserStoriesController"
        })
        .when("/Employees", {
            templateUrl: "Employees/EmployeeDetails.html",
            controller: "EmployeesController"
        })
        .when("/NewEmployee", {
            templateUrl: "Employees/EmployeeInsert.html",
            controller: "EmployeesController"
        })
        .when("/ModifyEmployee/:employeeID", {
            templateUrl: "Employees/EmployeeModify.html",
            controller: "EmployeesController"
        })
        .when("/Tasks", {
            templateUrl: "Tasks/ProjectTaskDetails.html",
            controller: "ProjectTasksController"
        })
        .when("/NewTask", {
            templateUrl: "Tasks/ProjectTaskInsert.html",
            controller: "ProjectTasksController"
        })
        .when("/ModifyTask/:projectTaskID", {
            templateUrl: "Tasks/ProjectTaskModify.html",
            controller: "ProjectTasksController"
        })*/
    .otherwise({redirectTo:"/Home"})
});