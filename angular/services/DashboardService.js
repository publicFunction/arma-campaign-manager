application.factory('DashboardService', ['$http', 'config', function($http, config) {

    return {
        getLatestCampaign : function (successCb, errorCb) {
            console.log("CALLED DASHBOARD SERVICE");
        }
    };
}]);
