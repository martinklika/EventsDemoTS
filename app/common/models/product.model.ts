module app.common.models {
    'use strict';
    
    export interface IProduct {
        name: string;
        testFunc(text: string): string;
    }

    export class Product implements IProduct {
        constructor(public name: string) {
        }

        testFunc(text: string): string {
            console.log('testFunc works in product model!!!');
            return this.name += text;
        }
    }
}
