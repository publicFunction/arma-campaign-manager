
application.factory('AuthService', ['$http', 'config', function($http, config) {
    var user = {};
    var token = null;

    return {
        login : function (payload) {

            $http.post(
                config.apiUrl+'auth',
                payload
            ).success(
                function(data, response) {
                    console.log("Success");
                    console.log(data, response);
                }
            ).error(
                function(data, response) {
                    console.log("ERROR");
                    console.log(data, response);
                }
            );

        },
        logout : function () {

        },
        me : function () {

        }
    };
}]);
