module app.eventList {
    'use strict';

    interface IEventList {
        categoryName: string;
        events?: app.common.models.IMyEvent[];
    }

    class EventListController implements IEventList {
        categoryName: string;
        events: app.common.models.IMyEvent[];

        constructor() {
            this.categoryName = 'Category Name';
            this.events = [];
            // this.events = [
            //     {
            //         'id': 1,
            //         'name': 'Some Event 1',
            //         'date': new Date(2013, 1, 1, 10, 30, 0),
            //         'time': '10:30 am',
            //         'address': {
            //             'street': 'Some Address no. 1',
            //             'city': 'City One',
            //             'country': 'USA'
            //         }
            //     },
            //     {
            //         'id': 2,
            //         'name': 'Second Event',
            //         'date': new Date(2013, 3, 15, 9, 0, 0),
            //         'time': '9:00am - 5:00pm',
            //         'address': {
            //             'street': 'Some Address no. 222',
            //             'city': 'City Two',
            //             'country': 'Canada'
            //         }
            //     },
            //     {
            //         'id': 3,
            //         'name': 'Event 333333',
            //         'date': new Date(2013, 3, 16, 8, 0, 0),
            //         'time': '8:00am - 4:30pm',
            //         'address': {
            //             'street': 'Some Address no. 333',
            //             'city': 'City Three',
            //             'country': 'Canada'
            //         }
            //     },
            //     {
            //         'id': 4,
            //         'name': 'Fourth event',
            //         'date': new Date(2010, 1, 1, 10, 0, 0),
            //         'time': '10:00am',
            //         'address': {
            //             'street': 'Some Address no. 444',
            //             'city': 'City 4',
            //             'country': 'USA'
            //         }
            //     }
            // ];
            var myEvent5: app.common.models.IMyEvent = new app.common.models.MyEvent(
                5, 'Fifth event', new Date(2020, 2, 2, 22, 22, 22), '8am');
            // myEvent5.setName('I just set name to Event5');
            // myEvent5.testEvent();
            this.events.push(myEvent5);
        }

        testFunction(): void {
            console.log('TEST FUNCTION in list ctrl');
        }
        
        testOuterFunction(myEvent: app.common.models.IMyEvent): void {
            myEvent.testEvent();
            console.log('testOuterFunction');
        }
        
        testOuterSetName(myEvent: app.common.models.IMyEvent): void {
            myEvent.setName();
            console.log('testOuterFunction');
        }
    }

    angular
        .module('app.eventList')
        .controller('EventListController', EventListController);
}
