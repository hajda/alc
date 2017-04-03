(function albumItemFilterDefinition() {
    'use strict';

    angular.module('alcApp')
        .filter('AlcAlbumItemFilter', albumItemFilter);

    albumItemFilter.$inject = [];

    function albumItemFilter() {
        return function albumItem(input, arg1, arg2) {
            return input && (arg1 || arg2);
        };
    }
})();
