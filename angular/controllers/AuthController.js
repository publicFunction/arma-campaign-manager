
application.controller('AuthController', ['$rootScope', '$scope', '$location', 'AuthService', function($rootScope, $scope, $location, AuthService) {

    $scope.account = {"email" : null, "password" : null};
    $scope.email;
    $scope.password;
    $scope.user = {};

    $scope.processLogin = function() {
        $scope.account.email = this.email;
        $scope.account.password = this.password;

        AuthService.login($scope.account,
            function() {
                $location.path('/dashboard');
            },
            function (errorResp) {
                $location.path('/login');
            }
        );
    },
    $scope.processLogout = function() {
        AuthService.logout(
            function (success) {
                $rootScope.authorised = false;
                $location.path('/login');
            },
            function (error) {
                console.error("Error Processing Logout: "+error.status+" "+error.statusText);
            }
        );
    },
    $scope.user = function() {
        AuthService.logout(
            function (success) {
                $scope.user = success
            },
            function () {
                $location.path('/dashboard');
            }
        );
    },
    $scope.isAuth = function () {
        return $rootScope.authorised;
    }

}]);
