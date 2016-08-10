application.factory('CampaignService', ['$http', 'config', function($http, config) {

    return {
        getLatestCampaign : function (community, successCb, errorCb) {
            console.log(community);
            $http({
                method : 'GET',
                url : config.apiUrl+'community',
                headers : {
                    'Authorization': 'Bearer '+localStorage.getItem('token')
                }
            })
            .then(
                function (response) {
                    return successCb({"name" : "Campaign One"});
                },
                function (response) {
                    errorCb(response);
                }
            );

        }
    };
}]);
