/**
 * Created by PD on 2016.03.08..
 */
(function smoothScrollControllerDefinition() {
    'use strict';

    angular
        .module('alcApp')
        .controller('AlcSmoothScrollController', smoothScrollController)
    ;

    smoothScrollController.$inject = ['$scope', '$window', '$location', 'AlclSmoothScroll'];

    function smoothScrollController($scope, $window, $location, AlcSmoothScroll) {
        angular.element($window).bind(
            "scroll", function () {
                if (window.pageYOffset > 0) {
                    $scope.scrollDelta = 'big-delta';
                } else {
                    $scope.scrollDelta = 'small-delta';
                }
                $scope.$apply();
            }
        );

        $scope.scrollTo = function (eID) {
            var offset = 0;
            if ($scope.scrollDelta == 'small-delta') { // if the header is big
                //offset = 110 - window.pageYOffset; // correct the scroll target, because tha header will be smaller by 60px
            }

            // set the location.hash to the id of
            // the element you wish to scroll to.
            //$location.hash('bottom');

            // call $anchorScroll()
            AlcSmoothScroll.scrollTo(eID, offset);
        };
    }
})();
