module app.productList {
    'use strict';
    
    interface IProductList {
        title: string;
        showImage: boolean;
        products: app.common.models.IProduct[];
        toggleImage(): void;
    }

    class ProductListController implements IProductList {
        title: string;
        showImage: boolean;
        products: app.common.models.IProduct[];

        constructor() {
            this.title = 'Product List';
            this.showImage = false;
            this.products = [];

            var newProduct: app.common.models.IProduct = new app.common.models.Product('Saw');
            newProduct.name = newProduct.testFunc(' testFunc works!!!');
            this.products.push(newProduct);
        }

        toggleImage(): void {
            this.showImage = !this.showImage;
        }
    }
    angular
        .module('app.productList')
        .controller('ProductListController', ProductListController);
}
