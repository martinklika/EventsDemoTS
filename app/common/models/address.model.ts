module app.common.models {
    'use strict';

    export interface IAddress {
        street: string;
        city: string;
        country: string;
        showFlag?(): string;
        testFunction?(): void;
    }

    export class Address implements IAddress {

        constructor(public street: string, public city: string, public country: string) {
        }
        
        showFlag(): string {
            console.log('showFlag called');
            
            var flagUrl: string;
            switch (this.country) {
                case 'Canada':
                    flagUrl = 'http://flags.fmcdn.net/data/flags/normal/ca.png';
                    break;
                default:
                    flagUrl = 'http://flags.fmcdn.net/data/flags/normal/jp.png';    
            }
            return flagUrl;
        }
        
        testFunction(): void {
            console.log('Test Function called');
        }
    }
}

