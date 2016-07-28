var application = angular.module('campaignmanager', ['ngCookies', 'ui.router'])

application.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);

application.constant('config', {
    apiUrl: 'http://api.a3cman.publicfunction.co.uk/v1/',
    apiVersion: 'v1'
});

application.run(['$rootScope', '$state', '$location', 'AuthService', function ($rootScope, $state, $location, AuthService) {
    var public_routes = ['', '/', '/about', '/contact'];
    $rootScope.$on('$stateChangeStart',
        function(event, toState, toParams, fromState, fromParams) {
            AuthService.isLoggedIn(
                function(success) {
                    console.debug("Current User is valid : "+success.status+" "+success.statusText);
                    $rootScope.authorised = true;
                },
                function(error) {
                    if(public_routes.indexOf(toState.url) < 0) {
                        $location.path('/login');
                    }
                }
            );
        }
    );
}]);
