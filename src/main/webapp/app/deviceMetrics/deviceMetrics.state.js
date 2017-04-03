(function deviceMetricsStateDefinition() {
    'use strict';

    angular
        .module('alcApp')
        .config(deviceMetricsStateConfig);

    deviceMetricsStateConfig.$inject = ['$stateProvider'];

    function deviceMetricsStateConfig($stateProvider) {
        $stateProvider.state(
            'alcDeviceMetricsState',
            {
                parent: 'app',
                url: '/alc-device-metrics',
                data: {
                    authorities: [],
                    pageTitle: 'deviceMetrics',
                    readableName: 'Device Metrics'
                },
                views: {
                    'content@': {
                        templateUrl: 'app/deviceMetrics/deviceMetrics.html'//,
                        // controller: 'AlcDeviceMetricsController'
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
                        $translatePartialLoader.addPart('alcDeviceMetricsState');
                        return $translate.refresh();
                    }]
                }
            }
        );
    }
})();
