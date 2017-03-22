(function stickyTitleDirectiveDefinition() {
    'use strict';
    angular.module('alcApp')
        .directive('alcStickyTitles', stickyTitleDirective)
    ;

    stickyTitleDirective.$inject = ['$timeout', '$window'];

    function stickyTitleDirective($timeout, $window) {
        return {
            restrict: 'AE',
            // templateUrl: 'app/components/testDirective/testDirective.template.html',
            controller: 'AlcStickyTitlesController',
            controllerAs: 'StickyTitlesCtrl',
            link: link
        };

        function link($scope, $element, attribs, ctrl) {
            var myWindow = angular.element($window);
            var stickingOffset = 80;

            $timeout(function handleTitles() {


                var initialScrollTops = [];
                $scope.sectionTitleClasses = [];

                myWindow.on('scroll', function stickSectionTitlesIfNecessary() {
                    /* * * * * * *
                     * On first scroll, mark where the titles are. If the scroll position reaches the amount of a
                     * title's initial position, then it is on the top and should stick there until the next one reaches
                     * the top.
                     *
                     * But the titles might move after this postLink has run, because deeper directive are rendered
                     * between them. This way the marked scroll-tops turn out to be false and
                     * they will stick when they shouldn't. That's why it is done only on first scroll.
                     */
                    var stickyTitles = $element.find('.alc-sticky-title'); // Obtain the sticky titles
                    console.info('Sticky Titles:', stickyTitles);
                    initScrollTops(initialScrollTops, stickyTitles);
                    initScrollTops = function() {};

                    /* * * * * *
                     * At every scroll movement, the positions of each headers are calculated from the initial positions
                     * of the titles and the scroll delta. Then it is determined for each title what it should do:
                     * - If it is lower in the page, then it should behave regularly (else statement)
                     * - If it is near the top, it should supersede the one above it (add class alc-swim-on to the above preceeding)
                     * - if it is at the top or above, it should stick to the top (alc-stick)
                     * - if it is superseded by the following title, it should slide up a few pxs above the top (added class alc-swim-on)
                     *
                     *  TODO | It would be much nicer if the dom elements were given the classes by DOM manipulation,
                     *  TODO | because ow one have to remember to add ngClass directive to the title elements and reference
                     *  TODO | reference the element on the appropriate position in the {@link sectionTitleClasses} array.
                     */
                    for (var j = 0; j < stickyTitles.length; j++) {
                        if (myWindow.scrollTop() >= initialScrollTops[j] - stickingOffset - 20) {
                            if (j > 0) {
                                // console.log('make previous swim on');
                                $scope.sectionTitleClasses[j - 1] = 'alc-stick alc-swim-on'
                            }
                        }
                        if (myWindow.scrollTop() >= initialScrollTops[j] - stickingOffset) {
                            // console.log('stick!');
                            $scope.sectionTitleClasses[j] = 'alc-stick';
                        } else {
                            // console.log('release...');
                            $scope.sectionTitleClasses[j] = '';
                        }

                        if (myWindow.scrollTop() == 0) {
                            $scope.sectionTitleClasses[j] = '';
                        }

                        $scope.$digest();
                    }
                });
            }, 0);

            /**
             * Obtains the current scroll position of each DOM element supplied in the second parameter, and stores them
             * in an other array conservatively.
             * Used to determine the starting positions of the DOM elements.
             * @param initialScrollTops - an array in which on each index there is the position of the stickyTitle DOM element
             * @param stickyTitles = DOM elements
             * @returns the array of DOM element positions
             */
            function initScrollTops(initialScrollTops, stickyTitles) {
                for (var i = 0; i < stickyTitles.length; i++) {
                    initialScrollTops.push(
                        angular.element(stickyTitles[i]).prop('offsetTop')
                    );
                }
                console.info('scrollTops:', initialScrollTops);
                return initialScrollTops;
            }
        }
    }
})();


