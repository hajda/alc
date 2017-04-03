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
            // if (SmoothScroll.scrollDelta == 'small-delta') { // if the header is big
            //     //offset = 110 - window.pageYOffset; // correct the scroll target, because tha header will be smaller by 60px
            // }

            // /** set the location.hash to the id of the element you wish to scroll to. */
            // $location.hash('bottom');

            SmoothScroll.scrollTo(eID, $rootScope.scrollDelta == 'small-delta' ? 35 : 0);
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
    }
})();
