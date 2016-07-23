application.directive('aDirective', function() {
    return {
        element: 'A',
        template : '<span class="some-class">This is a directive</span>',
        link: function(scope, elem, attr) {

        }
    }
});