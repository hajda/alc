(function galleryControllerDefinition() {
    'use strict';

    angular.module('alcApp')
        .controller('AlcGalleryController', galleryController);

    galleryController.$inject = ['$scope', '$state'];

    function galleryController($scope, $state) {

        /* Controller API */

        this.goBack = goBack;
        this.selectAlbum = selectAlbum;

        /* Controller functions */

        function goBack($event) {
            $scope.selectedAlbum = undefined;
            $event.stopPropagation();

        }

        function selectAlbum(album) {
            $scope.selectedAlbum = album;
        }

        /* Implementation details */
    }
})();
