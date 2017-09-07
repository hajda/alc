(function albumCoverFrameDirectiveDefinition() {
    'use strict';
    angular.module('alcApp')
        .directive('alcAlbumCoverFrame', albumCoverFrameDirective);

    albumCoverFrameDirective.$inject = ['AlcImageFrame'];

    function albumCoverFrameDirective(FrameHandler) {
        return {
            restrict: 'AE',
            templateUrl: 'app/components/alcComponents/contentManagers/gallery/imageFrame/albumCoverFrame/albumCoverFrame.template.html',
            // controller: 'AlcAlbumCoverFrameController',
            // controllerAs: 'AlbumCoverFrameCtrl',
            link: function postLink($scope, $element, attribs, ctrl) {
                FrameHandler.updateFrame($element, attribs);
                $scope.stripe = attribs.stripe;
            }
        };
    }
})();
