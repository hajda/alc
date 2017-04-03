(function videoThumbnailDirectiveDefinition() {
    'use strict';
    angular.module('alcApp')
        .directive('alcVideoThumbnail', videoThumbnailDirective);

    videoThumbnailDirective.$inject = ['$sce'];

    function videoThumbnailDirective($sce) {
        return {
            scope: {},
            restrict: 'AE',
            templateUrl: 'app/components/gallery/videoThumbnail/videoThumbnail.template.html',
            controller: 'AlcVideoThumbnailController',
            controllerAs: 'VideoThumbnailCtrl',
            link: function postLink($scope, $element, attribs, ctrl) {
                $scope.playing = false;
                $scope.videoUrl = attribs.youtubeLink;
                $scope.videoEmbed = attribs.embedSrc;
                $scope.thumbnailSrc = attribs.thumbnailSrc;
                $scope.thumbnailCaption = attribs.title;
                $scope.thumbnailSubCaption = attribs.subtitle;
                $scope.darkFace = attribs.darkFace;
                $scope.trustVideoSrc = function(src) {
                    return $sce.trustAsResourceUrl(src + '?autoplay=1&rel=0');
                };
            }
        };
    }
})();

