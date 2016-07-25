application.config(['$stateProvider', '$urlRouterProvider', '$sceDelegateProvider', function($stateProvider, $urlRouterProvider, $sceDelegateProvider) {

    $urlRouterProvider.otherwise('/');
    $sceDelegateProvider.resourceUrlWhitelist(['self']);

    $stateProvider
        .state('home', {
            url         : "/",
            templateUrl : "/templates/home.html",
            controller  : 'DefaultController'
        })
        .state('dashboard', {
            url         : "/dashboard",
            templateUrl : "/templates/dashboard/index.html",
            controller  : 'DashboardController'
        })
        .state('settings', {
            url         : "/settings",
            templateUrl : "/templates/settings/index.html",
            controller  : 'DashboardController'
        })
        .state('about', {
            url         : "/about",
            templateUrl : "/templates/about/index.html",
            controller  : 'DefaultController'
        })
        .state('about-maps', {
            url         : "/about/maps",
            templateUrl : "/templates/about/maps.html",
            controller  : 'DefaultController'
        })
        .state('contact', {
            url         : "/contact",
            templateUrl : "/templates/contact.html",
            controller  : 'DefaultController'
        })
        .state('login', {
            url         : "/login",
            templateUrl : "/templates/auth/login.html",
            controller  : 'AuthController'
        })
        .state('logout', {
            url         : "/logout",
            template : "",
            controller  : 'AuthController'
        });
}]);