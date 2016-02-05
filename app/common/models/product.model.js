var app;
(function (app) {
    var common;
    (function (common) {
        var models;
        (function (models) {
            'use strict';
            var Product = (function () {
                function Product(name) {
                    this.name = name;
                }
                Product.prototype.testFunc = function (text) {
                    console.log('testFunc works in product model!!!');
                    return this.name += text;
                };
                return Product;
            })();
            models.Product = Product;
        })(models = common.models || (common.models = {}));
    })(common = app.common || (app.common = {}));
})(app || (app = {}));
