application.directive('serverStatus',['CommunityService', function(CommunityService) {
    return {
        element: 'E',
        templateUrl : 'templates/partials/server_status.html',
        link: function(scope, elem, attr) {
            CommunityService.getCommunity(
                function (success) {
                    scope.community = success.data;
                },
                function (error) {
                    console.error(error);
                }
            );
        }
    }
}]);