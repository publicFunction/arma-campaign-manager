(function(){

    var app_config;
    var application = angular.module('boilerplate', ['controllers', 'services', 'directives', 'ngCookies', 'ui.router']);

    /* Routes */
    application.config(function($stateProvider, $urlRouterProvider, $sceDelegateProvider) {

        $urlRouterProvider.otherwise('/');

        $sceDelegateProvider.resourceUrlWhitelist([
            'self',
            'https://www.youtube.com/**']);

        $stateProvider
            .state('home', {
                url         : "/",
                templateUrl : "/templates/home.html",
                controller  : 'DefaultController'
            }).state('about', {
                url         : "/",
                templateUrl : "/templates/about.html",
                controller  : 'DefaultController'
            }).state('contact', {
                url         : "/",
                templateUrl : "/templates/contact.html",
                controller  : 'DefaultController'
            });
        });
})();

