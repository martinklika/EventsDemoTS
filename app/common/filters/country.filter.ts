module app.common.filters {
    'use strict';

    angular
        .module('app.common.filters')
        .filter('showFlag', () => showFlag);

    export function showFlag(countryName: string): string {
        switch (countryName) {
            case 'Canada':
                return 'http://flags.fmcdn.net/data/flags/normal/ca.png';
            case 'USA':
                return 'http://flags.fmcdn.net/data/flags/normal/us.png';
            default:
                return 'http://flags.fmcdn.net/data/flags/normal/jp.png';
        }
    }
}
