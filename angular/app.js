var app_config;
var application = angular.module('campaignmanager', ['ngCookies', 'ui.router'])

application.config(['$httpProvider', function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    //$httpProvider.defaults.headers.post['Content-Type'] = 'application/json; charset=UTF-8';
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);


application.constant('config', {
    apiUrl: 'http://api.cm.app.dev/v1/',
    apiVersion: 'v1'
});