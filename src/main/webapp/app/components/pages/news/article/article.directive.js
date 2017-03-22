/**
 * Created by dev on 2017.03.21..
 */
(function articleDirectiveDefinition() {
    'use strict';

    angular
        .module('alcApp')
        .directive('alcArticle', articleDirective)
    ;

    articleDirective.$inject = [];

    function articleDirective() {
        return {
            restrict: 'E',
            controller: 'AlcArticleController',
            controllerAs: 'ArticleCtrl',
            templateUrl: 'app/components/pages/news/article/article.template.html',
            link: function postLink($scope, attribs, $element, ctrl) {
            }
        };
    }
})();
