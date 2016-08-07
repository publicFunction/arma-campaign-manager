application.factory('ServerQueryService', ['$http', 'config', function($http, config) {
    var connection = null;

    return {
        contactServer : function (server) {
            console.debug("Connecting to server: "+server.name+'...');
            /*connection = new WebSocket('ws://'+server.ip_address+':'+server.query_port);

            connection.onerror = function (error) {
                console.error(error);
            };
            connection.onopen = function () {
                connection.send('Ping');
            };
            connection.onmessage = function(evt) {
                console.log(e.data);
            };*/
        }
    }
}]);