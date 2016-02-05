var app;
(function (app) {
    var productList;
    (function (productList) {
        'use strict';
        var ProductListController = (function () {
            function ProductListController() {
                this.title = 'Product List';
                this.showImage = false;
                this.products = [];
                var newProduct = new app.common.models.Product('Saw');
                newProduct.name = newProduct.testFunc(' testFunc works!!!');
                this.products.push(newProduct);
            }
            ProductListController.prototype.toggleImage = function () {
                this.showImage = !this.showImage;
            };
            return ProductListController;
        })();
        angular
            .module('app.productList')
            .controller('ProductListController', ProductListController);
    })(productList = app.productList || (app.productList = {}));
})(app || (app = {}));
