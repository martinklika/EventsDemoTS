module app.common.services {
    'use strict';

    export interface IDataAccessService {
        getEvents(): app.common.models.IMyEvent[];
        getEventById(id: number): app.common.models.IMyEvent;
        getPresentations(): app.common.models.IPresentation[];
    }

    export class DataAccessService implements IDataAccessService {
        getEvents(): app.common.models.IMyEvent[] {
            var events: app.common.models.IMyEvent[] = [];

            var myEvent1: app.common.models.IMyEvent = new app.common.models.MyEvent(
                1, 'Some Event 1', new Date(2020, 4, 4, 22, 22, 22));
            var myEvent2: app.common.models.IMyEvent = new app.common.models.MyEvent(
                2, 'Second event', new Date(2016, 3, 2, 11, 22, 22));
            var myEvent3: app.common.models.IMyEvent = new app.common.models.MyEvent(
                3, 'Another event 3', new Date(2017, 11, 10, 10, 0, 0));
            var myEvent4: app.common.models.IMyEvent = new app.common.models.MyEvent(
                4, '4th event', new Date(2016, 2, 2, 22, 0, 0));
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

        getEventById(id: number): app.common.models.IMyEvent {
            return this.findEvent(id);
        }

        getPresentations(): app.common.models.IPresentation[] {
            var presentations: app.common.models.IPresentation[] = [];

            var presentation1: app.common.models.IPresentation = new app.common.models.Presentation(
                1, 1, 'Session no. 01', 'Creator 1', 2, 'Advanced', 'Abstract');
            var presentation2: app.common.models.IPresentation = new app.common.models.Presentation(
                2, 1, 'Session no. 02', 'Creator 1', 3, 'Basic', 'Abstract');
            var presentation3: app.common.models.IPresentation = new app.common.models.Presentation(
                3, 2, 'Session no. 03', 'Creator 1', 4, 'Advanced', 'Abstract');
            var presentation4: app.common.models.IPresentation = new app.common.models.Presentation(
                4, 2, 'Session no. 04', 'Creator 1', 1, 'Basic', 'Abstract');
            var presentation5: app.common.models.IPresentation = new app.common.models.Presentation(
                5, 2, 'Session no. 05', 'Creator 1', 3, 'Intermediate', 'Abstract');
            var presentation6: app.common.models.IPresentation = new app.common.models.Presentation(
                6, 2, 'Session no. 06', 'Creator 1', 4, 'Advanced', 'Abstract');
            var presentation7: app.common.models.IPresentation = new app.common.models.Presentation(
                7, 2, 'Session no. 07', 'Creator 1', 5, 'Basic', 'Abstract');
            var presentation8: app.common.models.IPresentation = new app.common.models.Presentation(
                8, 3, 'Session no. 08', 'Creator 1', 3, 'Advanced', 'Abstract');
            var presentation9: app.common.models.IPresentation = new app.common.models.Presentation(
                9, 3, 'Session no. 09', 'Creator 1', 2, 'Basic', 'Abstract');
            var presentation10: app.common.models.IPresentation = new app.common.models.Presentation(
                10, 1, 'Session no. 10', 'Creator 1', 1, 'Intermediate', 'Abstract');

            presentations.push(presentation1);
            presentations.push(presentation2);
            presentations.push(presentation3);
            presentations.push(presentation4);
            presentations.push(presentation5);
            presentations.push(presentation6);
            presentations.push(presentation7);
            presentations.push(presentation8);
            presentations.push(presentation9);
            presentations.push(presentation10);

            return presentations;
        }
        
        // Simple search without proper checks...
        private findEvent(id: number): app.common.models.IMyEvent {
            var events: app.common.models.IMyEvent[] = this.getEvents();
            var i: number = 1;
            while (i <= events.length && i !== id) {
                i++;
            }
            return events[i - 1];
        }
    }

    angular
        .module('app.common.services')
        .service('dataAccessService', DataAccessService);
}
