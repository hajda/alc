(function testSectionsDirectiveDefinition() {
    'use strict';
    angular
        .module('alcApp')
        .directive('alcTestSections', testSectionsDirective)
    ;

    testSectionsDirective.$inject = [];

    function testSectionsDirective() {
        return {
            restrict: 'AE',
            templateUrl: 'app/components/testSections/testSections.template.html',
            controller: 'AlcTestSectionsController',
            controllerAs: 'TestSectionsCtrl',
            link: function postLink($scope, elementInstance, attributeInstances, controller) {

            }
        };
    }
})();
