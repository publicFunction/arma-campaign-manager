
application.controller('AuthController',['$scope', 'AuthService', function($scope, AuthService) {

    $scope.account = {"email" : null, "password" : null};
    $scope.email;
    $scope.password;
    $scope.auth = {};

    $scope.processLogin = function() {
        $scope.account.email = this.email;
        $scope.account.password = this.password;

        AuthService.login($scope.account,
            function(response) {
                $scope.auth = response;
            },
            function (response) {
                console.log("Error");
            }
        );

    }
    
}]);
