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
        /** initialize menu */
        $scope.menu = Content.getMenuItems();

        $scope.onMenuItemClick = function($event, pageName) {
            $scope.scrollTo(pageName);
        };
    }
})();
