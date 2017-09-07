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
            restrict: 'AE',
            controller: 'AlcArticleController',
            controllerAs: 'ArticleCtrl',
            templateUrl: 'app/components/alcComponents/contentManagers/articles/article/article.template.html',
            link: function postLink($scope, attribs, $element, ctrl) {
            }
        };
    }
})();
