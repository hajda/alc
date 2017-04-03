(function showControllerDefinition() {
    'use strict';

    angular
    	.module('alcApp')
        .controller('AlcShowController', showController);

    showController.$inject = ['$scope'];

    function showController($scope) {
        var showCtrl = this;

        /* private */

        var myData = [];

        /* public */

        /*      API */

        showCtrl.setItemName = setItemName;

        /*      public function definitions */

        function setItemName(itemIndex, itemName) {
            getItem(itemIndex).name = itemName;
            myData.push(itemName);
        }

        /* implementation details */

        function getItem(itemIndex) {
            return $scope.myModel.items[itemIndex];
        }
    }
})();

