(function testSectionsServiceDefinition() {
    'use strict';

    angular
        .module('alcApp')
        .factory('AlcTestSections', testSectionsService)
    ;

    testSectionsService.$inject = [];

    function testSectionsService() {
        return {
        };
    }
})();
