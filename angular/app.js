var application = angular.module('campaignmanager', ['ngCookies', 'ui.router']);

application.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);

application.constant('config', {
    apiUrl: 'http://api.cm.app.dev/v1/',
    apiVersion: 'v1'
});

application.run(['$rootScope', '$state', '$location', 'AuthService', function ($rootScope, $state, $location, AuthService) {
    var public_routes = ['', '/', '/about', '/contact'];
    $rootScope.$on('$stateChangeStart',
        function(event, toState, toParams, fromState, fromParams) {
            $rootScope.state_path = toState.name;
            $rootScope.user = {};
            AuthService.isLoggedIn (
                function(success) {
                    console.debug("Current User is valid : "+success.status+" "+success.statusText);
                    $rootScope.authorised = true;
                    $rootScope.user = JSON.parse(localStorage.getItem('user'));
                },
                function(error) {
                    if(public_routes.indexOf(toState.url) < 0) {
                        $location.path('/login');
                    }
                }
            );
        }
    );

    var Singleton = new function () {
        var self = this;
        self.methodForIDE = function() {
            return "HELLOO!";
        };
    };
}]);
