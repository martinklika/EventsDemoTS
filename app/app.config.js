var app;
(function (app) {
    'use strict';
    angular.module('eventManagementSystem').config(config);
    config.$inject = [
        '$routeProvider',
        '$locationProvider'
    ];
    function config($routeProvider, $locationProvider) {
        $routeProvider.when('/', {
            templateUrl: '/app/event-list/event-list.html',
            controller: 'EventListController',
            controllerAs: 'vm'
        })
            .when('/aaa', {
            templateUrl: '/app/event-list/event-list.1.html',
            controller: 'EventListController',
            controllerAs: 'vm'
        })
            .when('/bbb', {
            templateUrl: 'app/product-list/product-list.html',
            controller: 'ProductListController',
            controllerAs: 'vm'
        })
            .otherwise('/');
        $locationProvider.html5Mode(true);
    }
})(app || (app = {}));
