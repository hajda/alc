(function testSectionsFilterDefinition() {
    'use strict';

    angular
        .module('alcApp')
        .filter('AlcTestSectionsFilter', testSectionsFilter)
    ;

    testSectionsFilter.$inject = [];

    function testSectionsFilter() {
        return function testSections(input, arg1, arg2) {
            return input && (arg1 || arg2);
        };
    }
})();
