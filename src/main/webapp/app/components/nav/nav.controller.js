/**
 * Created by PD on 2016.03.08..
 */
(function navControllerDefinition() {
    'use strict';

    angular
        .module('alcApp')
        .controller('AlcNavController', navController);

    navController.$inject = ['$scope', '$state', '$timeout',  'AlcTemporaryContentService'];

    function navController($scope, $state, $timeout, Content) {
        /* init */

        /** initialize menu */
        $scope.menu = Content.getMenuItems();
        $scope.menu.mobileHide = true;

        /* API */

        $scope.onMenuItemClick = onMenuItemClick;
        $scope.toggleMenu = toggleMenu;

        /* public */

        function onMenuItemClick($event, pageName) {
            /**
             * TODO | this i just a quick fix.
             * TODO | - when on home state, don't go anywhere, JUST SCROLL.
             * TODO | - when on a single page state (like /#/alc-gallery),
             * TODO |   then DO NOT SCROLL, go to the "pageName" page's single page state
             */
            $state.go('home');
            $timeout(goToAlcPage, 1);

            function goToAlcPage() {
                $scope.scrollTo(pageName);
                $scope.menu.mobileHide = true;
            }
        };

        function toggleMenu() {
            $scope.menu.mobileHide = !$scope.menu.mobileHide;
        };
    }
})();



