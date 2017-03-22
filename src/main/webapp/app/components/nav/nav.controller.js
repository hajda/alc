/**
 * Created by PD on 2016.03.08..
 */
(function navControllerDefinition() {
    'use strict';

    angular
        .module('alcApp')
        .controller('AlcNavController', navController);

    navController.$inject = ['$scope', '$window', '$location', 'AlclSmoothScroll'];

    function navController($scope, $window, $location, AlcSmoothScroll) {

    }
})();
