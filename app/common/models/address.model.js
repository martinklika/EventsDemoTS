var app;
(function (app) {
    var common;
    (function (common) {
        var models;
        (function (models) {
            'use strict';
            var Address = (function () {
                function Address(street, city, country) {
                    this.street = street;
                    this.city = city;
                    this.country = country;
                }
                Address.prototype.showFlag = function () {
                    console.log('showFlag called');
                    var flagUrl;
                    switch (this.country) {
                        case 'Canada':
                            flagUrl = 'http://flags.fmcdn.net/data/flags/normal/ca.png';
                            break;
                        default:
                            flagUrl = 'http://flags.fmcdn.net/data/flags/normal/jp.png';
                    }
                    return flagUrl;
                };
                Address.prototype.testFunction = function () {
                    console.log('Test Function called');
                };
                return Address;
            })();
            models.Address = Address;
        })(models = common.models || (common.models = {}));
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
