module app.directives.eventPresentations {
    'use strict';
    
    angular
        .module('app.directives.eventPresentations')
        .directive('eventPresentations', EventPresentations);
        
    EventPresentations.$inject = [];
    
    /* @ngInject */    
    function EventPresentations(): angular.IDirective {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/directives/event-presentations/event-presentations.html',
            controller: 'PresentationListController',
            controllerAs: 'ctrlAs',
            scope: {
                scopeOptionProperty1: '=valueOfScopeOptionProperty1'
            }
        };
    }
}
