(function(){
    'use strict';

    var services = angular.module('services', ['ngResource']);
    
    services.factory('aService', function($rootScope) {
        return {
            'param' : 'This is a parameter',
            getMethod : function () {
                return 'Some Data';
            },
            getAnotherMethod : function () {
                return 'Other Data';
            }
        };
    });

})();