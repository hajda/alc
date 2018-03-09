(function videoThumbnailDirectiveDefinition() {
    'use strict';
    angular.module('alcApp')
        .directive('alcVideoThumbnail', videoThumbnailDirective);

    videoThumbnailDirective.$inject = ['$sce', '$window', 'AlcImageFrame'];

    function videoThumbnailDirective($sce, $window, ImageFrame) {
        return {
            scope: {},
            restrict: 'AE',
            templateUrl: 'app/components/alcComponents/contentManagers/gallery/videoThumbnail/videoThumbnail.template.html',
            controller: 'AlcVideoThumbnailController',
            controllerAs: 'VideoThumbnailCtrl',
            link: function postLink($scope, $element, attribs, ctrl) {
                $scope.playing = false;
                $scope.videoUrl = attribs.youtubeLink;
                $scope.videoEmbed = attribs.embedSrc;
                $scope.thumbnailSrc = attribs.thumbnailSrc.match(/https?:\/\//) ? '' : $window.location.origin + '/' + attribs.thumbnailSrc;
                $scope.thumbnailCaption = attribs.title;
                $scope.thumbnailSubCaption = attribs.subtitle;
                $scope.darkFace = attribs.darkFace;

                var thumbnailElement = $element.find('.alc-video-thumbnail-image');
                ImageFrame.updateFrame(thumbnailElement, {
                    src: attribs.thumbnailSrc,
                    alignImage: 'fill'
                });

                /**
                 * No, the trusted urls have to be pre-declared in the app.js!
                 * @param src
                 * @returns {*}
                 */
                $scope.trustVideoSrc = function(src) {
                    return $sce.trustAsResourceUrl(src);
                };

            }
        };
    }
})();

