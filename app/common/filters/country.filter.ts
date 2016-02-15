module app.common.filters {
    'use strict';
    
    angular
        .module('app.common.filters')
        .filter('countryFilter', () => countryFilter);
        
    export function countryFilter(input: string): string {
        // work in progress
        if (input === undefined) {
            return 'NO DATE... test ';
        } else {
            return 'SOME DATE TEST FILTER STUFF';
        }
    }
}
