var application = angular.module('campaignmanager', ['ngCookies', 'ui.router'])

application.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);

application.constant('config', {
    apiUrl: 'http://api.cm.app.dev/v1/',
    apiVersion: 'v1'
});

application.run(['$rootScope', '$state', '$location', 'AuthService', function ($rootScope, $state, $location, AuthService) {
    $rootScope.$on('$stateChangeStart',
        function(event, toState, toParams, fromState, fromParams) {
            AuthService.isLoggedIn(
                function(success) {
                    console.debug("Current User is valid");
                    //console.log(success);
                },
                function(error) {
                    console.error(error);
                    $location.path('/login')
                }
            );
        }
    );
}]);
