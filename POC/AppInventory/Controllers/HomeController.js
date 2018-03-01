(function () {
    var HomeController = function ($scope) {
        $scope.message = "WelCome to Online Project Tracking Web site";

        $scope.slides = [
            {
                header: "Manage Your Projects !!",
                body: "This site is used for managing projects. A single Tool to manage your project!!",
                button: "More Details"
            },
            {
                header: "Add User Stories !!",
                body: "You can add different user stories as a Business Administrators. Your Stories will be form your project tasks.",
                button: "User Stories"
            },
            {
                header: "Manager Comments !!",
                body: "Manager can add comments for the tasks which are going on under your project!!",
                button: "Manager Comments"
            },
            {
                header: "Employees List !!",
                body: "You can see all the employees details with their skill sets to assign the appropriate tasks and do efficient project management.",
                button:"Let Me Try !!"
            },
            {
                header: "Track Project Progress !!",
                body: "You can track Project Progress of all employees who are working under that project. You can also see the report for individual employee and his/her performance.",
                button:"Try It !!"
            },
            {
                header: "Add New Projects !!",
                body: "Your company can add different projects into this site and manager can assign the tasks to the users for the project.",
                button: "Check Out Snaps!!"
            }
        ];

        
        console.log($scope.slides);
    };
    app.controller("HomeController", ["$scope", HomeController]);
}());