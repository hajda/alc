/**
 * TODO how to directly get the missing data (commented lines)
 */
(function deviceMetricsDirectiveDefinition() {
    'use strict';
    angular.module('alcApp')
        .directive('alcDeviceMetrics', deviceMetricsDirective);

    deviceMetricsDirective.$inject = [];

    function deviceMetricsDirective() {
        return {
            restrict: 'AE',
            templateUrl: 'app/components/deviceMetrics/deviceMetrics.template.html',
            controller: 'AlcDeviceMetricsController',
            controllerAs: 'DeviceMetricsCtrl',
            link: function postLink($scope, $element, attribs, ctrl) {

                $scope.userAgent = navigator.userAgent;

                $scope.devicePixelRatio = window.devicePixelRatio;

                $scope.effectiveViewportWidth = document.documentElement.clientWidth;
                $scope.effectiveViewportHeight = document.documentElement.clientHeight;

                // $scope.realViewportWidth = ?;
                // $scope.realViewportHeight = ?;

                $scope.deviceVirtualWidth = window.screen.width;
                $scope.deviceVirtualHeight = window.screen.height;

                // $scope.devicePhisicalWidth = ?;
                // $scope.devicePhisicalHeight = ?;
            }
        };
    }
})();
