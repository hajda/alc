(function videoThumbnailControllerDefinition() {
    'use strict';

    angular
    	.module('alcApp')
        .controller('AlcVideoThumbnailController', videoThumbnailController);

    videoThumbnailController.$inject = ['$scope'];

    function videoThumbnailController($scope) {
        var videoThumbnailCtrl = this;

        /* private */

        var myData = [];

        /* public */

        /*      API */

        videoThumbnailCtrl.setItemName = setItemName;

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

