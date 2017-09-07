/**
 * Created by dev on 2017.03.21..
 */
(function pageControllerDefinition() {
    'use strict';

    angular
        .module('alcApp')
        .controller('AlcPageController', pageController)
    ;

    pageController.$inject = ['$scope'];

    function pageController($scope) {
        var pageCtrl = this;

        // pageCtrl.myFunction = myFunction;
    }
})();
