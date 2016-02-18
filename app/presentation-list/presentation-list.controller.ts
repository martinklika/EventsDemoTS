module app.presentationList {
    'use strict';

    interface IPresentationList {
        categoryName: string;
        presentations?: app.common.models.IPresentation[];
        sortorder: string;
        predicate: string;
        reverse: boolean;
        order(value: string): void;
        getPresentations(): void;
    }

    class PresentationListController implements IPresentationList {
        static $inject: string[] = ['dataAccessService', '$scope'];

        categoryName: string;
        presentations: app.common.models.IPresentation[];
        sortorder: string;
        predicate: string;
        reverse: boolean;

        constructor(private dataAccessService: app.common.services.IDataAccessService, 
                    private $scope: any) {
            $scope.categoryName = 'List of Presentations';
            this.getPresentations();
            this.sortorder = '-duration';
            this.predicate = '-duration';
            this.reverse = true;
            // console.log('$scope ', $scope);
        }

        order(value: string): void {
            this.reverse = (this.predicate === value) ? !this.reverse : false;
            this.predicate = value;
        }

        getPresentations(): void {
            this.presentations = this.dataAccessService.getPresentations();
        }
    }

    angular
        .module('app.presentationList')
        .controller('PresentationListController', PresentationListController);
}
