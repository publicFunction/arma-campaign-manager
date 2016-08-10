application.directive('serverStatus',['CommunityService', 'ServerQueryService', function(CommunityService, ServerQueryService) {
    return {
        element: 'E',
        templateUrl : 'templates/partials/server_status.html',
        link: function(scope, elem, attr) {
            CommunityService.getCommunityServers(
                function (success) {
                    scope.servers = success.data;
                },
                function (error) {
                    console.error(error);
                }
            );
            scope.getServerStatus = function(server) {
                return ServerQueryService.contactServer(server);
            }
        }
    }
}]);