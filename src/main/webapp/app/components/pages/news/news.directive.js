/**
 * Created by dev on 2017.03.21..
 */
(function newsDirectiveDefinition() {
    'use strict';

    angular
        .module('alcApp')
        .directive('alcNews', newsDirective)
    ;

    newsDirective.$inject = [];

    function newsDirective() {
        return {
            restrict: 'E',
            controller: 'AlcNewsController',
            controllerAs: 'NewsCtrl',
            templateUrl: 'app/components/pages/news/news.template.html',
            link: function postLink($scope, attribs, $element, ctrl) {
            }
        };
    }
})();
