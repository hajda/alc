(function albumDirectiveDefinition() {
    'use strict';
    angular.module('alcApp')
        .directive('alcAlbum', albumDirective);

    albumDirective.$inject = [];

    function albumDirective() {
        return {
            restrict: 'AE',
            templateUrl: 'app/components/alcComponents/contentManagers/gallery/album/album.template.html',
            controller: 'AlcAlbumController',
            controllerAs: 'AlbumCtrl',
            link: function postLink($scope, $element, attribs, ctrl) {
                $scope.selectedItem = $scope.selectedAlbum.items[0];
                $scope.fullScreen = false;

                $scope.scrollActiveThumbnailIntoView = scrollActiveThumbnailIntoView;

                function scrollActiveThumbnailIntoView() {
                    $element.find('.alc-selected-album-item-thumbnail')[0].scrollIntoView(false, 'smooth');
                }
            }
        };
    }
})();
