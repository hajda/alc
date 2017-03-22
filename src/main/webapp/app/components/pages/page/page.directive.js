/**
 * Created by dev on 2017.03.21..
 */
(function pageDirectiveDefinition() {
    'use strict';

    angular
        .module('alcApp')
        .directive('alcPage', pageDirective)
    ;

    pageDirective.$inject = [];

    function pageDirective() {
        return {
            restrict: 'E',
            scope: { // isolate$scope
                page: '=alcPage'
            },
            controller: 'AlcPageController',
            controllerAs: 'PageCtrl',
            transclude: {
                'pagetitle': 'pageTitle',
                'pagebody': 'pageBody'
            },
            templateUrl: 'app/components/pages/page/page.template.html',
            link: function postLink($scope, attribs, $element, ctrl) {

            }
        };
    }
})();
