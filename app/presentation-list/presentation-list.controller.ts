module app.presentationList {
    'use strict';

    interface IPresentationList {
        categoryName: string;
        presentations?: app.common.models.IPresentation[];
        getPresentations(): void;
    }

    class PresentationListController implements IPresentationList {
        static $inject: string[] = ['dataAccessService', '$scope'];
        
        categoryName: string;
        presentations: app.common.models.IPresentation[];
	    
        constructor(private dataAccessService: app.common.services.IDataAccessService, private $scope: any) {
            $scope.categoryName = 'List of Presentations';
            this.getPresentations();
            // console.log('$scope ', $scope);
        }
        
        getPresentations(): void {
            this.presentations = this.dataAccessService.getPresentations();
        }
    }

    angular
        .module('app.presentationList')
        .controller('PresentationListController', PresentationListController);
}
