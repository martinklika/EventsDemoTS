module app.eventNew {
    'use strict';

    angular.module('app.eventNew').config(routeConfig);

    routeConfig.$inject = [
        '$routeProvider'
    ];

    function routeConfig($routeProvider: angular.route.IRouteProvider): void {
        $routeProvider.when('/event-new', {
            templateUrl: 'app/event-new/event-new.html',
            controller: 'EventNewController',
            controllerAs: 'vm'
        });
    }
}
