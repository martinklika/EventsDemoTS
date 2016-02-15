module app.eventNew {
    'use strict';
    
    interface IEventNew {
        myEvent: app.common.models.IMyEvent;
        saveEvent(newEvent: app.common.models.IMyEvent, newEventForm: angular.IFormController): void;
        cancelEvent($location: angular.ILocationProvider): void;
    }
    
    class EventNewController implements IEventNew {
        myEvent: app.common.models.IMyEvent;
        
        constructor() {
        }
        
        saveEvent(newEvent: app.common.models.IMyEvent, newEventForm: angular.IFormController): void {
            console.log('newEvent', newEvent);
            console.log('newEventForm', newEventForm);
            console.log('$valid', newEventForm.$valid);
        }
        
        cancelEvent(): void {
            window.location.assign('/');
        }
    }
    
    angular
        .module('app.eventNew')
        .controller('EventNewController', EventNewController);
}
