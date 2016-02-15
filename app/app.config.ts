module app {
    'use strict';

    angular.module('eventManagementSystem').config(routeConfig);

    routeConfig.$inject = [
        '$routeProvider', 
        '$locationProvider'
    ];

    function routeConfig($routeProvider: ng.route.IRouteProvider, $locationProvider: ng.ILocationProvider): void {
        $routeProvider.when('/', {
            templateUrl: '/app/event-list/event-list.html',
            controller: 'EventListController',
            controllerAs: 'vm'
        })
        .when('/products', {
            templateUrl: 'app/product-list/product-list.html',
            controller: 'ProductListController',
            controllerAs: 'vm'
        })
        .otherwise('/');
        
        $locationProvider.html5Mode(true);
    }
}
