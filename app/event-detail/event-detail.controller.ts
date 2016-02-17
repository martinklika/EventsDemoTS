module app.eventDetail {
    'use strict';

    interface IEventDetail {
        myEvent: app.common.models.IMyEvent;
        getEventById(): void;
    }
    
    interface IRouteParamsWithId extends angular.route.IRouteParamsService {
        id: string;
    }

    class EventDetailController implements IEventDetail {
        static $inject: string[] = ['$routeParams', 'dataAccessService'];
        
        myEvent: app.common.models.IMyEvent;
	    
        constructor(private routeParamsWithId: IRouteParamsWithId, 
                    private dataAccessService: app.common.services.IDataAccessService) {
            this.getEventById();
        }
        
        getEventById(): void {
            var myEventId: number = parseInt(this.routeParamsWithId.id, 10);
            this.myEvent = this.dataAccessService.getEventById(myEventId);
            
            // this.dataAccessService.getEventById(myId, function(result) { this.myEvent = result; });
            
            // this.q.when(this.dataAccessService.getEventById(parseInt(this.routeParamsWithId.id, 10))).then(
            //     (event: any) => {
            //         console.log('event ', event);
            //         this.myEvent = event;
            //     }
            // );
        }
    }

    angular
        .module('app.eventDetail')
        .controller('EventDetailController', EventDetailController);
}
