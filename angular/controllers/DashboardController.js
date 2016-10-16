application.controller('DashboardController', ['$rootScope', '$scope', 'DashboardService', 'CommunityService',
    function($rootScope, $scope, DashboardService, CommunityService) {
    $scope.community = {};

    $scope.init = function() {
        CommunityService.getCommunity(
            function (success) {
                $scope.community = success;
            },
            function (error) {
                console.error(error);
            }
        )
    };

    $scope.init();

}]);
