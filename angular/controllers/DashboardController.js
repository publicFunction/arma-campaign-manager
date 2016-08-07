application.controller('DashboardController', ['$rootScope', '$scope', 'DashboardService', 'CommunityService', 'ServerQueryService', 
    function($rootScope, $scope, DashboardService, CommunityService, ServerQueryService) {

    $scope.campaign = {};
    $scope.community = {};

    $scope.init = function() {
        console.log("GET DASHBOARD DATA");
        CommunityService.getCommunity(
            function (success) {
                $scope.community = success.data;
            },
            function (error) {
                console.error(error);
            }
        );
        DashboardService.getLatestCampaign(
            function (success) {

            },
            function (error) {

            }
        );

    };

    $scope.getServerStatus = function (serverId) {
        console.log(serverId);
        CommunityService.getCommunityServer(serverId,
            function (success) {
                ServerQueryService.contactServer(success.data);
            },
            function (error) {
                console.error(error);
            }
        );
    };

    $scope.init();

}]);
