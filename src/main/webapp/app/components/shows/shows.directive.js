(function showsDirectiveDefinition() {
    'use strict';
    angular.module('alcApp')
        .directive('alcShows', showsDirective);

    showsDirective.$inject = [];

    function showsDirective() {
        return {
            restrict: 'AE',
            templateUrl: 'app/components/shows/shows.template.html',
            controller: 'AlcShowsController',
            controllerAs: 'ShowsCtrl',
            link: function postLink($scope, $element, attribs, ctrl) {

            }
        };
    }
})();

