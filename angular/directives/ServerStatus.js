application.directive('serverStatus',['CommunityService', 'ServerQueryService', function(CommunityService, ServerQueryService) {
    return {
        element: 'E',
        replace: true,
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
                ServerQueryService.contactServer(server,
                    function(success) {
                        scope.server_result = success;
                    },
                    function(error) {
                        elem.addClass('inactive');
                        scope.server_result = error;
                    }
                );
            }
        }
    }
}]);