module app.directives.eventThumbnail {
    'use strict';

    angular
        .module('app.directives.eventThumbnail')
        .directive('eventThumbnail', EventThumbnail);

    EventThumbnail.$inject = [];

    /* @ngInject */
    function EventThumbnail(): angular.IDirective {
        return {
            restrict: 'E',
            replace: true, // does not create own tag <event-thumbnail/> in generated html code to pass validation by external tools/webs
            templateUrl: 'app/directives/event-thumbnail/event-thumbnail.html',
            scope: {
                // I want the event on the scope to be set to the object
                // that is represented by the event attribute on the directive
                vmThumb: '=myEvent', // will be named my-event (!) in html file
                // & allows to invoke a method within the scope that the directive lives in
                vmThumbAmpersand: '&' // will be named vm-thumb-ampersand (!) in html file
            }
        };
    }
}
