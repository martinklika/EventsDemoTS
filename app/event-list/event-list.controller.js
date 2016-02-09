var app;
(function (app) {
    var eventList;
    (function (eventList) {
        'use strict';
        var EventListController = (function () {
            function EventListController() {
                this.categoryName = 'List of Events';
                this.events = [];
                var myEvent1 = new app.common.models.MyEvent(5, 'Some Event 1', new Date(2020, 4, 4, 22, 22, 22), '8am');
                var myEvent2 = new app.common.models.MyEvent(5, 'Second event', new Date(2016, 3, 2, 11, 22, 22), '8am');
                var myEvent3 = new app.common.models.MyEvent(5, 'Another event 3', new Date(2017, 11, 10, 10, 0, 0), '8am');
                var myEvent4 = new app.common.models.MyEvent(5, '4th event', new Date(2016, 2, 2, 22, 0, 0), '8am');
                var myEvent5 = new app.common.models.MyEvent(5, 'Fifth event', new Date(2020, 3, 22, 10, 0, 0), '8am');
                myEvent1.setAddress('Some Address no. 1', 'New York', 'USA');
                myEvent2.setAddress('Second Avenue 2', 'New York', 'USA');
                myEvent3.setAddress('Some Address no. 3', 'New York', 'USA');
                myEvent4.setAddress('4th Road', 'New York', 'USA');
                myEvent5.setAddress('555 Fifth Avenue', 'New York', 'USA');
                this.events.push(myEvent1);
                this.events.push(myEvent2);
                this.events.push(myEvent3);
                this.events.push(myEvent4);
                this.events.push(myEvent5);
            }
            EventListController.prototype.testOuterSetName = function (myEvent) {
                myEvent.setName('New Name');
                console.log('testOuterFunction');
            };
            EventListController.prototype.callHome = function () {
                console.log('CALL HOME');
            };
            return EventListController;
        })();
        angular
            .module('app.eventList')
            .controller('EventListController', EventListController);
    })(eventList = app.eventList || (app.eventList = {}));
})(app || (app = {}));
