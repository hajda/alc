(function showDirectiveDefinition() {
    'use strict';
    angular.module('alcApp')
        .directive('alcShow', showDirective);

    showDirective.$inject = ['$rootScope', '$timeout', 'AlcSmoothScroll'];

    function showDirective($rootScope, $timeout, SmoothScroll) {
        return {
            restrict: 'AE',
            templateUrl: 'app/components/shows/show/show.template.html',
            controller: 'AlcShowController',
            controllerAs: 'ShowCtrl',
            link: function postLink($scope, $element, attribs, ctrl) {
                console.info('delay!');
                $timeout(function(){
                    console.info('scroll!!!');
                    SmoothScroll.scrollTo('alc-shows-page-marker', $rootScope.scrollDelta == 'small-delta' ? 35 : 0);
                }, 1);
            }
        };
    }
})();

