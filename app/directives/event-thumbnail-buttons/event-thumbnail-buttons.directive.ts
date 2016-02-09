module app.directives.eventThumbnailButtons {
    'use strict';

    angular
        .module('app.directives.eventThumbnailButtons')
        .directive('eventThumbnailButtons', EventThumbnailButtons);

    EventThumbnailButtons.$inject = [];

    /* @ngInject */
    function EventThumbnailButtons(): angular.IDirective {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/directives/event-thumbnail-buttons/event-thumbnail-buttons.html',
            scope: {
                vmThumb: '=myEvent', // will be named my-event (!) in html file
                vmThumbAmpersand: '&' // will be named vm-thumb-ampersand (!) in html file
            }
        };
    }
}
