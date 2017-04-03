/**
 * Created by PD on 2016.03.08..
 */
(function navControllerDefinition() {
    'use strict';

    angular
        .module('alcApp')
        .controller('AlcNavController', navController);

    navController.$inject = ['$scope', '$window', '$location', 'AlcSmoothScroll', 'AlcTemporaryContentService'];

    function navController($scope, $window, $location, SmoothScroll, Content) {
        /* init */

        /** initialize menu */
        $scope.menu = Content.getMenuItems();
        $scope.menu.mobileHide = true;

        /* API */

        $scope.onMenuItemClick = onMenuItemClick;
        $scope.toggleMenu = toggleMenu;

        /* public */

        function onMenuItemClick($event, pageName) {
            $scope.scrollTo(pageName);
            $scope.menu.mobileHide = true;
        };

        function toggleMenu() {
            $scope.menu.mobileHide = !$scope.menu.mobileHide;
        };

        /* listeners */

        $window.onresize = function onResize() {
            if (!isMobileView()) { // if the view is desktop view after resize,
                $scope.menu.mobileHide = true; // Hide menu for the next time mobile view is activated
                $scope.$apply();
            }
        }

        // $window.addEventListener('orientationchange', onOrientationChange);
        /** invoking events manually in case it should have run before registering listener */
        // onOrientationChange();


        /* implementation details */

        /**
         * @returns {boolean}
         *      Returns true if device pixel ratio is greater than 1 AND desktop view is not requested
         */
        function isMobileView() {
            return true; // TODO implement determination of current view
        }

        function onOrientationChange() {
            console.log('device orientation: ', $window.orientation, '°');
            $scope.orientation = $window.orientation;
            switch ($window.orientation) {
                case -90:
                case 90:
                    break;
                default:
                    break;
            }
        }
    }
})();
