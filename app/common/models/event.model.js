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
                MyEvent.prototype.setName = function (name) {
                    this.name = name;
                };
                return MyEvent;
            })();
            models.MyEvent = MyEvent;
        })(models = common.models || (common.models = {}));
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
