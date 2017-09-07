/**
 * Created by PD on 2016.03.11..
 */
(function smoothScrollDirectiveDefinition() {
    'use strict';

    angular
        .module('alcApp')
        .directive('alcSmoothScroll', smoothScrollDirective)
    ;

    smoothScrollDirective.$inject = [];

    function smoothScrollDirective() {
        return {
            restrict: 'AE',
            controller: 'AlcSmoothScrollController',
            link: function link($scope) {
                $scope.scrollDelta = 'small-delta';  // initially, the scroll delta is 0, thus small
            }
        }
    }
})();
