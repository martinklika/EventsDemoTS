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
                MyEvent.prototype.setName = function (name) {
                    this.name = name;
                };
                MyEvent.prototype.setAddress = function (street, city, country) {
                    this.address = new models.Address(street, city, country);
                };
                return MyEvent;
            })();
            models.MyEvent = MyEvent;
        })(models = common.models || (common.models = {}));
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
