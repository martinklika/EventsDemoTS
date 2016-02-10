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
                vmThumbButtons: '=myEventButtons',
                vmThumbButtonsAmpersand: '&'
            }
        };
    }
}
