(function albumControllerDefinition() {
    'use strict';

    angular.module('alcApp')
        .controller('AlcAlbumController', albumController);

    albumController.$inject = ['$scope'];

    function albumController($scope) {

        /* Controller API */

        /* Controller functions */

        /* Implementation details */
    }
})();
/**
 * Ha NINCS album kivalasztva,
 *      akkor a gallery directive szkrollozodjon.
 * Ha van album kivalasztva,
 *      akkor a gallery directive NE szkrollozodjon,
 *          ES
 *      az album direktiva szkrollozodjon.
 */
