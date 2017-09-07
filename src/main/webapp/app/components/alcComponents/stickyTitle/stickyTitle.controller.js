(function stickyTitleControllerDefinition() {
    'use strict';

    angular
        .module('alcApp')
        .controller('AlcStickyTitlesController', stickyTitleController)
    ;

    stickyTitleController.$inject = ['$scope', '$element'];

    function stickyTitleController($scope, $element) {
    }
})();
