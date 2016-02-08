module app.common.models {
    'use strict';

    export interface IMyEvent {
        id: number;
        name: string;
        date: Date;
        time: string;
        address?: app.common.models.IAddress;
        modifyName?(): void;
        testEvent?(): void;
        setName?(name: string): void;
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
        
        // constructor() {
        // }
        
        testEvent(): void {
            console.log('testEvent called');
        }
        
        setName(name: string): void {
            this.name = name;
        }
    }
}

