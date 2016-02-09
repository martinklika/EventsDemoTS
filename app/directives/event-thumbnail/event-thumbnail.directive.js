var app;
(function (app) {
    var directives;
    (function (directives) {
        var eventThumbnail;
        (function (eventThumbnail) {
            'use strict';
            angular
                .module('app.directives.eventThumbnail')
                .directive('eventThumbnail', EventThumbnail);
            EventThumbnail.$inject = [];
            /* @ngInject */
            function EventThumbnail() {
                return {
                    restrict: 'E',
                    replace: true,
                    templateUrl: 'app/directives/event-thumbnail/event-thumbnail.html',
                    scope: {
                        // I want the event on the scope to be set to the object
                        // that is represented by the event attribute on the directive
                        vmThumb: '=myEvent',
                        // & allows to invoke a method within the scope that the directive lives in
                        vmThumbAmpersand: '&' // will be named vm-thumb-ampersand (!) in html file
                    }
                };
            }
        })(eventThumbnail = directives.eventThumbnail || (directives.eventThumbnail = {}));
    })(directives = app.directives || (app.directives = {}));
})(app || (app = {}));
