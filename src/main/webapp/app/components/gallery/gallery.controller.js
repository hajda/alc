(function galleryControllerDefinition() {
    'use strict';

    angular.module('alcApp')
        .controller('AlcGalleryController', galleryController);

    galleryController.$inject = ['$scope'];

    function galleryController($scope) {

        /* Controller API */

        this.goBack = goBack;

        /* Controller functions */

        function goBack($event) {
            console.log('GO BACK');
            $scope.albums.selectedAlbum = undefined;
            $event.stopPropagation();
        }

        /* Implementation details */
    }
})();
