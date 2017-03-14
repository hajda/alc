(function() {
    'use strict';

    angular
        .module('alcApp')
        .config(homeStateConfig);

    homeStateConfig.$inject = ['$stateProvider'];

    function homeStateConfig($stateProvider) {
        $stateProvider.state(
            'home',
            {
                parent: 'app',
                url: '/',
                data: {
                    authorities: []
                },
                views: {
                    'content@': {
                        templateUrl: 'app/home/home.html',
                        controller: 'HomeController',
                        controllerAs: 'vm'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
                        $translatePartialLoader.addPart('home');
                        return $translate.refresh();
                    }]
                }
            }
         );
    }
})();
