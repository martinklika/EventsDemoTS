module app.eventList {
    'use strict';

    angular.module('app.eventList').config(config);

    config.$inject = [
        '$routeProvider'
    ];

    function config($routeProvider: angular.route.IRouteProvider): void {
        $routeProvider.when('/xxx', {
            templateUrl: 'app/event-list/event-list.2.html',
            controller: 'EventListController',
            controllerAs: 'vm'
        });
    }
}
