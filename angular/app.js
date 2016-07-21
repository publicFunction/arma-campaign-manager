(function(){

    var app_config;
    var application = angular.module('boilerplate', ['controllers', 'services', 'directives', 'ngCookies', 'ui.router']);

    /* Routes */
    application.config(function($stateProvider, $urlRouterProvider, $sceDelegateProvider) {

        $urlRouterProvider.otherwise('/');
        $sceDelegateProvider.resourceUrlWhitelist(['self']);

        $stateProvider
            .state('home', {
                url         : "/",
                templateUrl : "/templates/home.html",
                controller  : 'DefaultController'
            })
            .state('dashboard', {
                url         : "/home",
                templateUrl : "/templates/dashboard.html",
                controller  : 'DashboardController'
            })
            .state('about', {
                url         : "/about",
                templateUrl : "/templates/about.html",
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
            });
        });
})();

