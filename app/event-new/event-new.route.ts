module app.eventNew {
    'use strict';

    angular.module('app.eventNew').config(config);

    config.$inject = [
        '$routeProvider'
    ];

    function config($routeProvider: angular.route.IRouteProvider): void {
        $routeProvider.when('/event-new', {
            templateUrl: 'app/event-new/event-new.html',
            controller: 'EventNewController',
            controllerAs: 'vm'
        });
    }
}
