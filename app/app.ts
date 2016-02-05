((): void => {
    'use strict';

    angular.module('eventManagementSystem', [
        'ngRoute',
        'ngResource',
        'app.eventList',
        'app.directives.eventThumbnail',
        'app.productList'
    ]);
})();
