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
        setName?(): void;
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
        
        setName(): void {
            console.log('old this is: ', this);
            console.log('old name is: ', this.name);
            this.name = 'pretty new name';
            console.log('new this is: ', this);
            console.log('new name is: ', this.name);
        }
    }
}

