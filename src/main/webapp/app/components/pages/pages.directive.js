/**
 * Created by dev on 2017.03.21..
 */
(function pagesDirectiveDefinition() {
    'use strict';

    angular
        .module('alcApp')
        .directive('alcPages', pagesDirective)
    ;

    pagesDirective.$inject = ['AlcTemporaryContentService'];

    function pagesDirective(Content) {
        return {
            restrict: 'AE',
            controller: 'AlcPagesController',
            controllerAs: 'PagesCtrl',
            templateUrl: 'app/components/pages/pages.template.html',
            link: function postLink($scope, $element, attribs, ctrl) {
                $scope.content = Content.getContent();
            }
        };
    }
})();
