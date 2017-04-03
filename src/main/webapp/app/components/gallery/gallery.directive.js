(function galleryDirectiveDefinition() {
    'use strict';
    angular.module('alcApp')
        .directive('alcGallery', galleryDirective);

    galleryDirective.$inject = ['AlcTemporaryContentService', '$interval'];

    function galleryDirective(Content, $interval) {
        return {
            restrict: 'AE',
            templateUrl: 'app/components/gallery/gallery.template.html',
            controller: 'AlcGalleryController',
            controllerAs: 'GalleryCtrl',
            link: function postLink($scope, elementInstance, attributeInstances, controller) {
                (function init() {
                    /**
                     * Load every resource lazy
                     * @type {Array}
                     */
                    var content = Content.getContent();
                    console.log('Content:', content);
                    $scope.albums = content.pages.gallery.pageContent.albums;
                })();
            }
        };
    }
})();
