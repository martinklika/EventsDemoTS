((): void => {
    'use strict';

    angular.module('eventManagementSystem', [
        'ngRoute',
        'ngResource',
        'app.common.services',
        'app.eventList',
        'app.eventDetail',
        'app.eventNew',
        'app.presentationList',
        'app.directives.eventThumbnail',
        'app.directives.eventThumbnailButtons',
        'app.directives.eventPresentations',
        'app.productList',
        'app.common.filters'
    ]);
})();
