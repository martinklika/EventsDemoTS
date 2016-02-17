module app.eventDetail {
    'use strict';

    angular.module('app.eventDetail').config(routeConfig);

    routeConfig.$inject = [
        '$routeProvider'
    ];

    function routeConfig($routeProvider: angular.route.IRouteProvider): void {
        $routeProvider.when('/eventDetail/:id', {
            templateUrl: 'app/event-detail/event-detail.html',
            controller: 'EventDetailController',
            controllerAs: 'vm'
        });
    }
}
