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
            restrict: 'AE',
            scope: { // isolate$scope
                page: '=alcPageId'
            },
            controller: 'AlcPageController',
            controllerAs: 'PageCtrl',
            transclude: {
                'alcpagetitle': 'alcPageTitle',
                'alcpagebody': 'alcPageBody'
            },
            templateUrl: 'app/components/pages/page/page.template.html',
            link: function postLink($scope, attribs, $element, ctrl) {

            }
        };
    }
})();
