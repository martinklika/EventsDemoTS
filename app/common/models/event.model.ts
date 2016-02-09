module app.common.models {
    'use strict';

    export interface IMyEvent {
        id: number;
        name: string;
        date: Date;
        time: string;
        address?: app.common.models.IAddress;
        setName(name: string): void;
        setAddress(street: string, city: string, country: string): void
    }

    export class MyEvent implements IMyEvent {
        id: number;
        name: string;
        date: Date;
        time: string;
        address: app.common.models.IAddress;

        constructor(id: number,
            name: string,
            date: Date,
            time: string) {
            this.id = id;
            this.name = name;
            this.date = date;
            this.time = time;
        }

        setName(name: string): void {
            this.name = name;
        }

        setAddress(street: string, city: string, country: string): void {
            this.address = new Address(street, city, country);
        }
    }
}

