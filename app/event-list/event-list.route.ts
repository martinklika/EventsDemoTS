module app.eventList {
    'use strict';

    angular.module('app.eventList').config(routeConfig);

    routeConfig.$inject = [
        '$routeProvider'
    ];

    function routeConfig($routeProvider: angular.route.IRouteProvider): void {
        $routeProvider.when('/xxx', {
            templateUrl: 'app/event-list/event-list.html',
            controller: 'EventListController',
            controllerAs: 'vm'
        });
    }
}
