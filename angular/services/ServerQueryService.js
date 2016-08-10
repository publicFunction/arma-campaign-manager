application.factory('ServerQueryService', ['$http', 'config', function($http, config) {

    return {
        contactServer : function (server) {
            console.debug("Connecting to server: "+server.name+'...');
            /*connection = new WebSocket('wss://'+server.ip_address+':'+server.query_port);

            connection.onerror = function (error) {
                console.error(error);
            };
            connection.onopen = function (success) {
                console.log(success);
                connection.send('Ping');
            };
            connection.onmessage = function(evt) {
                console.log(evt.data);
            };*/
        }
    }
}]);