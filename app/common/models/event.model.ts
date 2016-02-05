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
        setName?(text: string): void;
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
            this.name = name;
            this.date = date;
            this.time = time;
        }
        
        // constructor() {
        // }
        
        testEvent(): void {
            console.log('testEvent called');
        }
        
        setName(text: string): void {
            console.log('old name is: ' + this.name);
            this.name = text;
            console.log('new name is: ' + this.name);
        }
    }
}

