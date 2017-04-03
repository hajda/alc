(function videoThumbnailFilterDefinition() {
    'use strict';

    angular.module('alcApp')
        .filter('AlcVideoThumbnailFilter', videoThumbnailFilter);

    videoThumbnailFilter.$inject = [];

    function videoThumbnailFilter() {
        return function videoThumbnail(input, arg1, arg2) {
            return input && (arg1 || arg2);
        };
    }
})();

