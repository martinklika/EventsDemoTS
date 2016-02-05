// ((): void => {
//     'use strict';
//     angular.module('eventManagementSystem').config(config);
//         config.$inject = [
//             '$routeProvider',
//             '$locationProvider'
//         ];
//         function config($routeProvider: ng.route.IRouteProvider, $locationProvider: ng.ILocationProvider): void {
//             $locationProvider.html5Mode(true);
//             $routeProvider.when('/events/', {
//                 templateUrl: '/templates/eventList.html',
//                 controller: 'EventController',
//                 controllerAs: 'vm'
//             }).when('/event/:id', {
//                 templateUrl: '/templates/eventDetail.html',
//                 controller: 'EventDetailController',
//                 controllerAs: 'vm'
//             }).when('/profile', {
//                 templateUrl: '/templates/editProfile.html',
//                 controller: 'ProfileController',
//                 controllerAs: 'vm'
//             }).when('/createEvent', {
//                 templateUrl: '/atemplates/createEvent.html',
//                 controller: 'EventController',
//                 controllerAs: 'vm'
//             }).otherwise('/events/');
//         }
// })();
