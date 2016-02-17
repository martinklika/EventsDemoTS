module app.eventList {
    'use strict';

    interface IEventList {
        categoryName: string;
        callHomeCounter?: number;
        events?: app.common.models.IMyEvent[];
        getEvents(): void;
        testOuterSetName(myEvent: app.common.models.IMyEvent): void;
        callHome(): void;
    }

    class EventListController implements IEventList {
        static $inject: string[] = ['dataAccessService'];
        
        categoryName: string;
        callHomeCounter: number;
        events: app.common.models.IMyEvent[];
	    
        constructor(private dataAccessService: app.common.services.IDataAccessService) {
            this.categoryName = 'List of Events';
            this.callHomeCounter = 0;
            this.getEvents();
        }
        
        getEvents(): void {
            // this.events = [];
            // var someEvent: app.common.models.IMyEvent = this.dataAccessService.getEventById(5);
            // this.events.push(someEvent);
            this.events = this.dataAccessService.getEvents();
        }
        
        testOuterSetName(myEvent: app.common.models.IMyEvent): void {
            myEvent.setName('New Name');
            console.log('testOuterFunction');
        }
        
        callHome(): void {
            this.callHomeCounter++;
            console.log('CALL HOME ' + this.callHomeCounter + '-times');
        }
    }

    angular
        .module('app.eventList')
        .controller('EventListController', EventListController);
}
