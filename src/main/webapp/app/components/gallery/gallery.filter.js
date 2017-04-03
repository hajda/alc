(function galleryFilterDefinition() {
    'use strict';

    angular.module('alcApp')
        .filter('AlcGalleryFilter', galleryFilter);

    galleryFilter.$inject = [];

    function galleryFilter() {
        return function gallery(input, arg1, arg2) {
            return input && (arg1 || arg2);
        };
    }
})();
