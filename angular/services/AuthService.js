application.factory('AuthService', ['$http', 'config', function($http, config) {
    var user = {};
    var token = null;
    var auth = false;

    return {

        login : function (payload, successResp, errorResp) {
            $http({
                method: 'POST',
                url: config.apiUrl + 'auth',
                data: payload
            }).then(function (success) {
                    console.debug("Login Successful");
                    localStorage.setItem('token', success.data.token);
                    localStorage.setItem('user', JSON.stringify(success.data.user));
                    successResp();
                },
                function (error) {
                    localStorage.clear();
                    console.debug("Login Failed");
                    errorResp();
                });
        },

        logout : function (successResp, errorResp) {
            $http(
                {
                    method: 'DELETE',
                    url : config.apiUrl+'auth',
                    headers : {
                            'Authorization': 'Bearer '+localStorage.getItem('token')
                        }
                }
            ).then(
                function(success) {
                    console.log("Logout Successful");
                    localStorage.clear();
                    successResp(success);
                },
                function(error) {
                    console.error("Logout Failed");
                    if(error.status === 401) {
                        localStorage.removeItem('token');
                        console.error(error.status, error.statusText);
                    }
                    errorResp(error);
                }
            );
        },

        me : function (suceessResp, errorResp) {
            $http({
                method : 'GET',
                url : config.apiUrl+'auth',
                headers : {
                    'Authorization': 'Bearer '+localStorage.getItem('token')
                }
            }).then(
                function(success) {
                    console.log("Successful Auth Call");
                    successResp(success);
                },
                function(error) {
                    console.log("Error on Auth Call");
                    errorResp(error);
                }
            );
        },

        getToken : function() {
            return localStorage.getItem('token');
        },

        isLoggedIn : function (successResp, errorResp) {
            $http({
                method : 'GET',
                url : config.apiUrl+'auth',
                headers : {
                    'Authorization': 'Bearer '+localStorage.getItem('token')
                }
            }).then(
                function(success) {
                    console.debug("Successful Auth Call");
                    successResp(success);
                },
                function(error) {
                    console.error("Error on Auth Call");
                    if(error.status === 401 || error.status === 400) {
                        localStorage.removeItem('token');
                        console.error(error.status, error.statusText);
                    }
                    errorResp(error);
                }
            );
        }
        
    };
}]);
