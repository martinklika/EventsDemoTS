var app;
(function (app) {
    var directives;
    (function (directives) {
        var eventThumbnailButtons;
        (function (eventThumbnailButtons) {
            'use strict';
            angular
                .module('app.directives.eventThumbnailButtons')
                .directive('eventThumbnailButtons', EventThumbnailButtons);
            EventThumbnailButtons.$inject = [];
            /* @ngInject */
            function EventThumbnailButtons() {
                return {
                    restrict: 'E',
                    replace: true,
                    templateUrl: 'app/directives/event-thumbnail-buttons/event-thumbnail-buttons.html',
                    scope: {
                        vmThumb: '=myEvent',
                        vmThumbAmpersand: '&' // will be named vm-thumb-ampersand (!) in html file
                    }
                };
            }
        })(eventThumbnailButtons = directives.eventThumbnailButtons || (directives.eventThumbnailButtons = {}));
    })(directives = app.directives || (app.directives = {}));
})(app || (app = {}));
