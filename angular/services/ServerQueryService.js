application.factory('ServerQueryService', ['$http', 'config', function($http, config) {

    return {
        contactServer : function (server, successCb, errorCb) {
            $http({
                method : 'GET',
                url : config.apiUrl+'servers/'+server.id+'/status',
                headers : {
                    'Authorization': 'Bearer '+localStorage.getItem('token')
                }
            }).then(
                function (response) {
                    return successCb(response.data);
                },
                function (error) {
                    return errorCb(error.data);
                }
            )
        }
    }
}]);