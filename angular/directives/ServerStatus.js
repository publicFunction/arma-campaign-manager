application.directive('serverStatus', ['CommunityService', 'ServerQueryService', function(CommunityService, ServerQueryService) {
    return {
        element: 'A',
        scope: {
            community: '=community',
        },
        replace: true,
        templateUrl : 'templates/partials/server_status.html',
        link: function(scope, elem, attr) {
            scope.server_results = [];
            scope.$watch('community',
                function () {
                    CommunityService.getCommunityServers(
                        function (success) {
                            scope.servers = success.data;
                            scope.$watch('servers', function () {
                                angular.forEach(scope.servers, function(srv, key) {
                                    scope.getServerStatus = function(srv) {
                                        ServerQueryService.contactServer(srv,
                                            function(success) {
                                                scope.server_results.push(success);
                                            },
                                            function(error) {
                                                elem.addClass('inactive');
                                                scope.server_results.push(error);
                                            }
                                        );
                                    };
                                });
                                scope.server_results;
                            });
                        },
                        function (error) {
                            console.error(error);
                        }
                    );
                }
            );
        }
    }
}]);