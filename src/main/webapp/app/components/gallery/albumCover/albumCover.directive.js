(function albumCoverDirectiveDefinition() {
    'use strict';
    angular.module('alcApp')
        .directive('alcAlbumCover', albumCoverDirective);

    albumCoverDirective.$inject = [];

    function albumCoverDirective() {
        return {
            restrict: 'AE',
            templateUrl: 'app/components/gallery/albumCover/albumCover.template.html',
            controller: 'AlcAlbumCoverController',
            controllerAs: 'AlbumCoverCtrl',
            link: function postLink($scope, $element, attribs, ctrl) {
                $element.css({
                    'background-image' : 'url(' + attribs.src +')',
                    'background-size' : 'cover',
                    'background-attachment' : attribs.attachment || 'scroll',
                    'background-position' : 'center'
                });
            }
        };
    }
})();
