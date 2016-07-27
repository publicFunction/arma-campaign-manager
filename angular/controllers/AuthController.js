
application.controller('AuthController', ['$scope', '$location', 'AuthService', function($scope, $location, AuthService) {

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
                $location.path('/');
            },
            function (error) {
                console.log(error);
                if(error.status === 401) {
                    //$location.path('/login');
                }
            }
        );
    },
    $scope.user = function() {
        AuthService.logout(function (success) {
            $scope.user = success
        },
        function () {
            $location.path('/dashboard');
        });
    }
    $scope.isAuth = function () {
        //return AuthService.isLoggedIn();
    }

}]);
