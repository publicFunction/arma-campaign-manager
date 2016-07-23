
application.factory('AuthService', ['$rootScope', '$http', '$scope', function($rootScope, $http, $scope) {
    $scope.user = {};
    $scope.token = null;
    return {
        login : function (payload) {
            console.log(payload);
        },
        logout : function () {
            
        },
        me : function () {

        }
    };
}]);
