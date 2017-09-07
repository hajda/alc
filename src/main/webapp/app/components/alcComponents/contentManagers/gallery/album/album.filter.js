(function albumFilterDefinition() {
    'use strict';

    angular.module('alcApp')
        .filter('AlcAlbumFilter', albumFilter);

    albumFilter.$inject = [];

    function albumFilter() {
        return function album(input, arg1, arg2) {
            return input && (arg1 || arg2);
        };
    }
})();
