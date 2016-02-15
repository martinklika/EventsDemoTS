module app.common.services {
    'use strict';

    export interface IDataAccessService {
        getData(): app.common.models.IMyEvent[];
    }

    export class DataAccessService implements IDataAccessService {
        getData(): app.common.models.IMyEvent[] {
            console.log('HELLO WORLD!');
            
            var events: app.common.models.IMyEvent[] = [];
            
            var myEvent1: app.common.models.IMyEvent = new app.common.models.MyEvent(
                5, 'Some Event 1', new Date(2020, 4, 4, 22, 22, 22));
            var myEvent2: app.common.models.IMyEvent = new app.common.models.MyEvent(
                5, 'Second event', new Date(2016, 3, 2, 11, 22, 22));
            var myEvent3: app.common.models.IMyEvent = new app.common.models.MyEvent(
                5, 'Another event 3', new Date(2017, 11, 10, 10, 0, 0));
            var myEvent4: app.common.models.IMyEvent = new app.common.models.MyEvent(
                5, '4th event', new Date(2016, 2, 2, 22, 0, 0));
            var myEvent5: app.common.models.IMyEvent = new app.common.models.MyEvent(
                5, 'Fifth event', new Date(2020, 3, 22, 10, 0, 0));
                
            myEvent1.setAddress('Some Address no. 1', 'Calgary', 'Canada');
            myEvent2.setAddress('Second Avenue 2', 'New York', 'USA');
            myEvent3.setAddress('Some Address no. 3', 'New York', 'USA');
            myEvent4.setAddress('4th Road', 'Vancouver', 'Canada');
            myEvent5.setAddress('555 Fifth Avenue', 'Helsinki', 'Finland');
            
            events.push(myEvent1);
            events.push(myEvent2);
            events.push(myEvent3);
            events.push(myEvent4);
            events.push(myEvent5);
            
            return events;
        }
    }

    angular
        .module('app.common.services')
        .service('dataAccessService', DataAccessService);
}
