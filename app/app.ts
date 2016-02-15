((): void => {
    'use strict';

    angular.module('eventManagementSystem', [
        'ngRoute',
        'ngResource',
        'app.eventList',
        'app.eventNew',
        'app.directives.eventThumbnail',
        'app.directives.eventThumbnailButtons',
        'app.productList',
        'app.common.filters'
    ]);
})();
