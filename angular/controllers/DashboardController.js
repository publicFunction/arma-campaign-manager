application.controller('DashboardController', ['$rootScope', '$scope', '$state', 'AuthService', function($rootScope, $scope, $state, AuthService) {

    $scope.init;
    $scope.auth = {};

    $scope.init = function () {
        //console.log(AuthService.isLoggedIn());
    };

    $scope.auth = function () {
        //return $scope.auth;
    };

    $scope.init();

}]);
