(function showDirectiveDefinition() {
    'use strict';
    angular.module('alcApp')
        .directive('alcShow', showDirective);

    showDirective.$inject = [];

    function showDirective() {
        return {
            restrict: 'AE',
            templateUrl: 'app/components/shows/show/show.template.html',
            controller: 'AlcShowController',
            controllerAs: 'ShowCtrl',
            link: function postLink($scope, $element, attribs, ctrl) {

            }
        };
    }
})();

