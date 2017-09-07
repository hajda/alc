(function creditsDirectiveDefinition() {
    'use strict';
    angular.module('alcApp')
        .directive('alcCredits', creditsDirective);

    creditsDirective.$inject = [];

    function creditsDirective() {
        return {
            restrict: 'AE',
            scope: {
                alcCredit: '='
            },
            templateUrl: 'app/components/alcComponents/credits/credits.template.html',
            controller: 'AlcCreditsController',
            controllerAs: 'CreditsCtrl',
            link: function postLink($scope, $element, attribs, ctrl) {

            }
        };
    }
})();
