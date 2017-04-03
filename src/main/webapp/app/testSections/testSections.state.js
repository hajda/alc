(function testSectionsStateDefinition() {
    'use strict';

    angular
        .module('alcApp')
        .config(alcTestSectionsStateConfig)
    ;

    alcTestSectionsStateConfig.$inject = ['$stateProvider'];

    function alcTestSectionsStateConfig($stateProvider) {
        $stateProvider.state(
            'alcTestSectionsState',
            {
                parent: 'app',
                url: '/test-sections',
                data: {
                    authorities: [],
                    pageTitle: 'testSections',
                    readableName: 'Test Sections'
                },
                views: {
                    'testsections@': {
                        templateUrl: 'app/testSections/testSections.html'//,
                        // controller: 'HomeController',
                        // controllerAs: 'vm'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate, $translatePartialLoader) {
                        $translatePartialLoader.addPart('alcTestSectionsState');
                        return $translate.refresh();
                    }]
                }
            }
        );
    }
})();
