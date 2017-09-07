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
                page: '=alcPageContent',
                pageIndex: '=alcPageIndex',
                sectionTitleClasses: '=alcSectionTitleClasses'
            },
            controller: 'AlcPageController',
            controllerAs: 'PageCtrl',
            templateUrl: 'app/components/alcComponents/contentManagers/pages/page/page.template.html',
            link: function postLink($scope, attribs, $element, ctrl) {

            }
        };
    }
})();
