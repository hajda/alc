(function albumItemDirectiveDefinition() {
    'use strict';
    angular.module('alcApp')
        .directive('alcAlbumItem', albumItemDirective);

    albumItemDirective.$inject = [];

    function albumItemDirective() {
        return {
            restrict: 'AE',
            templateUrl: 'app/components/gallery/album/albumItem/albumItem.template.html',
            controller: 'AlcAlbumItemController',
            controllerAs: 'vm',
            link: function postLink($scope, elementInstance, attributeInstances, controller) {

            }
        };
    }
})();
