(function testDirectiveControllerDefinition() {
    'use strict';

    angular.module('alcApp')
        .controller('AlcTestDirectiveController', testDirectiveController);

    testDirectiveController.$inject = [];

    function testDirectiveController() {
        var vm = this;
    }
})();
