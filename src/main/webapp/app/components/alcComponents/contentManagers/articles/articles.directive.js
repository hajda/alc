/**
 * Created by dev on 2017.03.21..
 */
(function articlesDirectiveDefinition() {
    'use strict';

    angular
        .module('alcApp')
        .directive('alcArticles', articlesDirective)
    ;

    articlesDirective.$inject = [];

    function articlesDirective() {
        return {
            restrict: 'E',
            controller: 'AlcArticlesController',
            controllerAs: 'ArticlesCtrl',
            templateUrl: 'app/components/alcComponents/contentManagers/articles/articles.template.html',
            link: function postLink($scope, attribs, $element, ctrl) {
            }
        };
    }
})();
