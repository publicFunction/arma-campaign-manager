application.directive('homeFeatures', function() {
    var self = this;
    reveals = function (evt, elem) {
        reveal = elem.find('div.reveal');
        content = reveal.find('div.content');
        switch (evt.type) {
            case "click":
            case "mouseenter":
                reveal.show();
                $.each(content, function() {
                    if($(this).attr('href') == '#'+evt.currentTarget.id) {
                        $(this).fadeIn('500');
                    }
                });
                break;
            case "mouseleave":
                reveal.hide();
                content.hide();
                break;
        }
    };
    return {
        element: 'E',
        templateUrl : 'templates/partials/home_features.html',
        link: function(scope, elem, attr) {
            articles = elem.find('article');
            articles.hover(function (evt) {
                evt.preventDefault();
                self.reveals(evt, elem);
            });
            articles.click(function(evt) {
                evt.preventDefault();
                self.reveals(evt, elem);
            })
        }
    }
});