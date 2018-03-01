

var app = angular.module("ProjectInventory", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "index.html"
    })
    .when("/Home", {
        templateUrl : "Home.html"
    })
    .when("/Projects", {
        templateUrl : "Accounts.html"
    });
});