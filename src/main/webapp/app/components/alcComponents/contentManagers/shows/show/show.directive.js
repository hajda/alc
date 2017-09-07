(function showDirectiveDefinition() {
    'use strict';
    angular.module('alcApp')
        .directive('alcShow', showDirective);

    showDirective.$inject = ['$rootScope', '$timeout', 'AlcSmoothScroll'];

    function showDirective($rootScope, $timeout, SmoothScroll) {
        return {
            restrict: 'AE',
            templateUrl: 'app/components/alcComponents/contentManagers/shows/show/show.template.html',
            controller: 'AlcShowController',
            controllerAs: 'ShowCtrl',
            link: function postLink($scope, $element, attribs, ctrl) {
                console.info('delay!');
            }
        };
    }
})();

