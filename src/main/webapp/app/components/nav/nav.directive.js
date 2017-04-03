/**
 * This directive is never invoked! The Alc nav is loaded via UI Router view "alcnav@".
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
            // This directive is never invoked! The Alc nav is loaded via UI Router view "alcnav@". (required for the smootScroll navigation to work)
        }
    }
}
