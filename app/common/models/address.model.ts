module app.common.models {
    'use strict';

    export interface IAddress {
        street: string;
        city: string;
        country: string;
        testFunction(): void;
        setAddress(street: string, city: string, country: string): void;
    }

    export class Address implements IAddress {
        constructor(public street: string, public city: string, public country: string) {
        }
        
        testFunction(): void {
            console.log('Test Function called');
        }
        
        setAddress(street: string, city: string, country: string): void {
            this.street = street;
            this.city = city;
            this.country = country;
        }
    }
}

