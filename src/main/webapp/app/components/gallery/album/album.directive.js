(function albumDirectiveDefinition() {
    'use strict';
    angular.module('alcApp')
        .directive('alcAlbum', albumDirective);

    albumDirective.$inject = [];

    function albumDirective() {
        return {
            restrict: 'AE',
            templateUrl: 'app/components/gallery/album/album.template.html',
            controller: 'AlcAlbumController',
            controllerAs: 'AlbumCtrl',
            link: function postLink($scope, elementInstance, attributeInstances, controller) {

            }
        };
    }
})();
