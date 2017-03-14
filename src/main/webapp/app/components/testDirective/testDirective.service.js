(function testDirectiveServiceDefinition() {
    'use strict';

    angular.module('alcApp')
        .factory('AlcTestDirective', testDirectiveService);

    testDirectiveService.$inject = [];

    function testDirectiveService() {
        return {
        };
    }
})();
