(function testDirectiveFilterDefinition() {
    'use strict';

    angular.module('alcApp')
        .filter('AlcTestDirectiveFilter', testDirectiveFilter);

    testDirectiveFilter.$inject = [];

    function testDirectiveFilter() {
        return function testDirective(input, arg1, arg2) {
            return input && (arg1 || arg2);
        };
    }
})();
