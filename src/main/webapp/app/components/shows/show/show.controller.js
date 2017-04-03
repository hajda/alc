(function showControllerDefinition() {
    'use strict';

    angular
    	.module('alcApp')
        .controller('AlcShowController', showController);

    showController.$inject = ['$scope'];

    function showController($scope) {
        var showCtrl = this;

        /* private */

        // TODO protect this data
        showCtrl.view = {
            views: {
                extended: {name: 'ExtendedView'},
                compact: {name: 'CompactView'}
            },
        };
        showCtrl.view.selectedView = showCtrl.view.views.compact;

        /* public */

        /*      API */

        showCtrl.switchToView = switchToView;
        showCtrl.collapse = collapse;
        showCtrl.expand = expand;
        showCtrl.toggleView = toggleView;
        showCtrl.isView = isView;
        showCtrl.viewIs = isView;
        showCtrl.easyDate = easyDate;

        /*      public function definitions */

        function switchToView(view) {
            showCtrl.view.selectedView = view;
        }
        function collapse() {
            showCtrl.switchToView(showCtrl.view.views.compact);
        }
        function expand() {
            showCtrl.switchToView(showCtrl.view.views.extended);
        }
        function toggleView() {
            if (showCtrl.isView(showCtrl.view.views.extended)) {
                showCtrl.collapse();
            } else {
                showCtrl.expand();
            }
        }
        function isView(view) {
            return showCtrl.view.selectedView == view;
        }
        function viewIsExtended() {
            return showCtrl.isView(showCtrl.view.views.extended);
        }
        function viewIsCompact() {
            return showCtrl.isView(showCtrl.view.views.compact);
        }


        function easyDate(date) {
            var result = date.match(/(\d\d\d\d)\.(\d\d)\.(\d\d)/);
            // console.log(result);
            return [convertMothNumber2Monthname(Number(result[2])), result[3]].join(' ');
        }

        /* implementation details */

        var months = [
            {name: 'january', abbrev: ''},
            {name: 'february', abbrev: ''},
            {name: 'march', abbrev: ''},
            {name: 'april', abbrev: ''},
            {name: 'may', abbrev: ''},
            {name: 'june', abbrev: ''},
            {name: 'july', abbrev: ''},
            {name: 'august', abbrev: ''},
            {name: 'september', abbrev: ''},
            {name: 'october', abbrev: ''},
            {name: 'november', abbrev: ''},
            {name: 'december', abbrev: ''}
        ];
        function convertMothNumber2Monthname(monthNumber) {

            return months[monthNumber].name;
        }

        function collapseOthers() {
            // TODO
        }
    }
})();

