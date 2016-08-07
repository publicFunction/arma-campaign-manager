application.factory('CommunityService', ['$http', 'config', function($http, config) {

    return {
        getCommunity : function (successCb, errorCb) {
            $http({
                method : 'GET',
                url : config.apiUrl+'community',
                headers : {
                    'Authorization': 'Bearer '+localStorage.getItem('token')
                }
            }).then(
                function (response) {
                    return successCb(response);
                },
                function (error) {
                    return errorCb(error);
                }
            );
        },
        getCommunityServer : function(serverId, successCb, errorCb) {
            console.log("CALLED COMMUNITY Server SERVICE");
            $http({
                method : 'GET',
                url : config.apiUrl+'community/servers/'+serverId,
                headers : {
                    'Authorization': 'Bearer '+localStorage.getItem('token')
                }
            }).then(
                function (response) {
                    return successCb(response);
                },
                function (error) {
                    return errorCb(error);
                }
            );
        }
    };
}]);
