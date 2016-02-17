module app.common.models {
    'use strict';

    export interface IPresentation {
        id: number;
        eventId: number;
        name: string;
        creatorName: string;
        duration: number;
        level: string;
        abstract: string;
    }

    export class Presentation implements IPresentation {
        id: number;
        eventId: number;
        name: string;
        creatorName: string;
        duration: number;
        level: string;
        abstract: string;

        constructor(id: number,
                    eventId: number,
                    name: string,
                    creatorName: string,
                    duration: number,
                    level: string,
                    abstract: string) {
            this.id = id;
            this.eventId = eventId;
            this.name = name;
            this.creatorName = creatorName;
            this.duration = duration;
            this.level = level;
            this.abstract = abstract;
        }
    }
}
