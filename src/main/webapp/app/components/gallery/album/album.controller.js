(function albumControllerDefinition() {
    'use strict';

    angular.module('alcApp')
        .controller('AlcAlbumController', albumController);

    albumController.$inject = ['$scope', '$timeout'];

    function albumController($scope, $timeout) {

        var AlbumCtrl = this;

        /* Controller API */

        AlbumCtrl.next = next;
        AlbumCtrl.prev = prev;
        AlbumCtrl.select = select;
        AlbumCtrl.toggleFullscreen = toggleFullscreen;

        /* Controller functions */

        function next() {
            var nextIndex = getSelectedItemIndex() + 1;
            if (isOverFlow(nextIndex)) {
                nextIndex = 0; // TODO refactor into function rewind()
            }
            AlbumCtrl.select($scope.selectedAlbum.items[nextIndex]);
        }

        function prev() {
            var previousIndex = getSelectedItemIndex() - 1;
            if (isUnderFlow(previousIndex)) {
                previousIndex = $scope.selectedAlbum.items.length - 1;
            }
            AlbumCtrl.select($scope.selectedAlbum.items[previousIndex]);
        }

        function select(item) {
            $scope.selectedItem = item;
            $timeout(function patients() { // because it the scrolling would happen before angular can change the class names
                $scope.scrollActiveThumbnailIntoView();
            }, 0);
        }

        function toggleFullscreen() {
            $scope.fullScreen = !$scope.fullScreen;
            console.log('FULLSCREEN', !$scope.fullScreen, '--->', $scope.fullScreen);
        }

        /* Implementation details */

        function getSelectedItemIndex() {
            var index = $scope.selectedAlbum.items.indexOf($scope.selectedItem);
            console.log('[ALC] AlbumCtrl - getSelectedItemIndex:', index);
            return index;
        }

        function isOverFlow(nextIndex) {
            return nextIndex >= $scope.selectedAlbum.items.length;
        }
        function isUnderFlow(previousIndex) {
            return previousIndex < 0;
        }
    }
})();
