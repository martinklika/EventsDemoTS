var app;
(function (app) {
    var eventList;
    (function (eventList) {
        'use strict';
        angular.module('app.eventList').config(config);
        config.$inject = [
            '$routeProvider'
        ];
        function config($routeProvider) {
            $routeProvider.when('/xxx', {
                templateUrl: 'app/event-list/event-list.2.html',
                controller: 'EventListController',
                controllerAs: 'vm'
            });
        }
    })(eventList = app.eventList || (app.eventList = {}));
})(app || (app = {}));
