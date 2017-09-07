/**
 * Created by PD on 2016.03.08..
 */
(function smoothScrollControllerDefinition() {
    'use strict';

    angular
        .module('alcApp')
        .controller('AlcSmoothScrollController', smoothScrollController)
    ;

    smoothScrollController.$inject = ['$scope', '$rootScope', '$window', '$location', 'AlcSmoothScroll'];

    function smoothScrollController($scope, $rootScope, $window, $location, SmoothScroll) {

        /* init */
        angular.element($window).bind("scroll", updateScrollDelta);
        $rootScope.scrollDelta = 'small-delta';

        /* $scope API */
        $scope.scrollTo = scrollTo;

        /* public functions */

        function scrollTo(eID) {
            SmoothScroll.scrollTo(eID, scrollOffsetBasedOnNavHeightAndOrientation());
        }

        /* implementation details */

        function updateScrollDelta() {
            if (window.pageYOffset > 0) {
                $rootScope.scrollDelta = 'big-delta';
                SmoothScroll.scrollDelta = 'big-delta';
            } else {
                $rootScope.scrollDelta = 'small-delta';
                SmoothScroll.scrollDelta = 'small-delta';
            }
            $scope.$apply();
        }

        /**
         * The distance to the scroll target can vary, and this function calculates the variation.
         *
         * There are 2 basic cases:
         * 1. when the orientation is portrait
         * 2. when the orientation is landscape
         *
         * 1.
         * In landscape, the navbar and the page tiles go to the left of the viewport,
         * so when scrolling to a page, there is an empty Page Title Bar on the top of the page.
         * In order to fix it, we want to scroll further down by 1 Page Title Bar, which is 69pxs tall (at the time of
         * the writing of this doc).
         *
         * 2.
         * In portrait, the navbar grows bigger whewn the page is scrolled all the way to the top. The navbar grows by
         * 35 pxs (at the time of the writing of this doc).
         *
         * The amount the navbar grows in portrait, and the height of the Page Title Bar is commonly called
         * "scrollOffset" in this function.
         *
         * @returns {number} the Scroll Offset
         */
        function scrollOffsetBasedOnNavHeightAndOrientation() {
            var scrollOffset = 0;

            if (viewportOrientation() == 'landscape') {
                scrollOffset = -64;
            } else if ($rootScope.scrollDelta == 'small-delta') {
                scrollOffset = 35;
            }

            return scrollOffset;
        }

        function viewportOrientation() {
            console.log('w:', $window.innerHeight, 'h:', $window.innerWidth);
            return $window.innerHeight > $window.innerWidth ? 'portrait' : 'landscape';
        }
    }
})();
