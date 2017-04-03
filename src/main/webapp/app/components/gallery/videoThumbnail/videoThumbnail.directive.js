(function videoThumbnailDirectiveDefinition() {
    'use strict';
    angular.module('alcApp')
        .directive('alcVideoThumbnail', videoThumbnailDirective);

    videoThumbnailDirective.$inject = [];

    function videoThumbnailDirective() {
        return {
            restrict: 'AE',
            templateUrl: 'app/components/gallery/videoThumbnail/videoThumbnail.template.html',
            controller: 'AlcVideoThumbnailController',
            controllerAs: 'VideoThumbnailCtrl',
            link: function postLink($scope, $element, attribs, ctrl) {

            }
        };
    }
})();

