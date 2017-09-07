(function imageFrameDirectiveDefinition() {
    'use strict';
    angular.module('alcApp')
        .directive('alcImageFrame', imageFrameDirective);

    imageFrameDirective.$inject = ['AlcImageFrame'];

    function imageFrameDirective(FrameHandler) {
        return {
            restrict: 'AE',
            // templateUrl: 'app/components/alcComponents/contentManagers/gallery/imageFrame/imageFrame.template.html',
            // controller: 'AlcImageFrameController',
            // controllerAs: 'ImageFrameCtrl',
            link: function postLink($scope, $element, attribs, ctrl) {
                FrameHandler.updateFrame($element, attribs);
            }
        };
    }
})();
