(function testSectionsStateDefinition() {
    'use strict';

    /**
     * This state is never used! The {@link nav} is invoked by view {@link alcnav@} defined in {@link app.state.js
     * (Note that this state definition defines view {@link alcnav2@})
     */
    angular
        .module('alcApp')
        .config(navState)
    ;

    navState.$inject = ['$stateProvider'];

    function navState($stateProvider) {
        $stateProvider.state(
            'alcNavState',
            {
                parent: 'app',
                url: '/nav',
                data: {
                    authorities: [],
                    pageTitle: 'Nav',
                    readableName: 'Navigation'
                },
                views: {
                    'alcnav2@': {
                        templateUrl: 'app/components/nav/nav.template.html',
                        controller: 'AlcNavController',
                        controllerAs: 'NavBarCtrl'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('alcNavState');
                        return $translate.refresh();
                    }]
                }
            }
        );
    }
})();
