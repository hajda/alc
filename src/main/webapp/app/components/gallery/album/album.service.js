(function albumServiceDefinition() {
    'use strict';

    angular.module('alcApp')
        .factory('AlcAlbum', albumService);

    albumService.$inject = [];

    function albumService() {
        return {
        };
    }
})();
