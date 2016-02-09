(function () {
    'use strict';
    angular.module('eventManagementSystem', [
        'ngRoute',
        'ngResource',
        'app.eventList',
        'app.directives.eventThumbnail',
        'app.directives.eventThumbnailButtons',
        'app.productList'
    ]);
})();
