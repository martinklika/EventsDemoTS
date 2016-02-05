var app;
(function (app) {
    var common;
    (function (common) {
        var models;
        (function (models) {
            'use strict';
            var MyEvent = (function () {
                function MyEvent(id, name, date, time) {
                    this.id = id;
                    this.name = name;
                    this.date = date;
                    this.time = time;
                }
                // constructor() {
                // }
                MyEvent.prototype.testEvent = function () {
                    console.log('testEvent called');
                };
                MyEvent.prototype.setName = function (text) {
                    console.log('old this is: ', this);
                    console.log('old name is: ', this.name);
                    this.name = text;
                    console.log('new this is: ', this);
                    console.log('new name is: ', this.name);
                };
                return MyEvent;
            })();
            models.MyEvent = MyEvent;
        })(models = common.models || (common.models = {}));
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
