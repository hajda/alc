/**
 * Created by PD on 2016.03.11..
 */
angular
    .module('alcApp')
    .directive('alcNav', navDirective);

navDirective.$inject = [];

function navDirective() {
    return {
        restrict: 'AE',
        controller: 'AlcNavController',
        templateUrl: 'scripts/components/nav/nav.template.html',
        link: function link($scope) {
        }
    }
}
