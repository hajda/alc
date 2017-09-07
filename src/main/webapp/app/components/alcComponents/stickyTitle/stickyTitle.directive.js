(function stickyTitleDirectiveDefinition() {
    'use strict';
    angular.module('alcApp')
        .directive('alcStickyTitles', stickyTitleDirective)
    ;

    stickyTitleDirective.$inject = ['$timeout', '$window'];

    function stickyTitleDirective($timeout, $window) {
        return {
            restrict: 'AE',
            // templateUrl: 'app/components/alcComponents/testDirective/testDirective.template.html',
            controller: 'AlcStickyTitlesController',
            controllerAs: 'StickyTitlesCtrl',
            link: link
        };

        function link($scope, $element, attribs, ctrl) {
            /** Windowing */
            var myWindow = angular.element($window);

            /** config */
            var stickingOffset = 80;

            /** globals */
            var stickyTitles;
            var initialScrollTops = [];
            $scope.sectionTitleClasses = [];

            $scope.initScrollTops = initScrollTops;

            /** events */
            $timeout(function handleTitles() {
                myWindow.on('scroll', stickSectionTitlesIfNecessary);
                // init();
            }, 0);

            $window.onresize = init;
            $window.addEventListener("orientationchange", init);

            /** implementation details */

            function init() {
                initialScrollTops = [];
                $scope.sectionTitleClasses = [];
                $scope.$digest();
                /**
                 * Reference $scope.initScrollTops will be invoked in the body of function stickSectionTitlesIfNecessary.
                 * stickSectionTitlesIfNecessary overwrites this reference after invoking it, so the scrollTop
                 * initialization doesn't run on every scroll event (the empty function runs instead).
                 * This way the scrolltop initialiyation runs only on the first scroll event after it was assigned to
                 * this reference.
                 * So when re-initialize, it has to re-assigned here.
                 */
                $scope.initScrollTops = initScrollTops;
                stickSectionTitlesIfNecessary();
            }

            function stickSectionTitlesIfNecessary() {
                /* * * * * * *
                 * On first scroll, mark where the titles are. If the scroll position reaches the amount of a
                 * title's initial position, then it is on the top and should stick there until the next one reaches
                 * the top.
                 *
                 * But the titles might move after this postLink has run, because deeper directive are rendered
                 * between them. This way the marked scroll-tops turn out to be false and
                 * they will stick when they shouldn't. That's why it is done only on first scroll.
                 */
                // console.info('Sticky Titles:', stickyTitles);
                $scope.initScrollTops(initialScrollTops);
                $scope.initScrollTops = function doNothing() {};

                /* * * * * *
                 * At every scroll movement, the positions of each headers are calculated from the initial positions
                 * of the titles and the scroll delta. Then it is determined for each title what it should do:
                 * - If it is lower in the page, then it should behave regularly (else statement)
                 * - If it is near the top, it should supersede the one above it (add class alc-swim-on to the above preceeding)
                 * - if it is at the top or above, it should stick to the top (alc-stick)
                 * - if it is superseded by the following title, it should slide up a few pxs above the top (added class alc-swim-on)
                 *
                 *  TODO | It would be much nicer if the dom elements were given the classes by DOM manipulation,
                 *  TODO | because now one have to remember to add ngClass directive to the title elements and reference
                 *  TODO | the element on the appropriate position in the {@link sectionTitleClasses} array.
                 */
                for (var j = 0; j < stickyTitles.length; j++) {
                    if (myWindow.scrollTop() >= initialScrollTops[j] - stickingOffset - 20) {
                        if (j > 0) {
                            // console.log('make previous swim on');
                            $scope.sectionTitleClasses[j - 1] = 2; // 'alc-stick alc-swim-on'
                        }
                    }
                    if (myWindow.scrollTop() >= initialScrollTops[j] - stickingOffset) {
                        // console.log('stick!');
                        $scope.sectionTitleClasses[j] = 1; //'alc-stick';
                    } else {
                        // console.log('release...');
                        $scope.sectionTitleClasses[j] = '';
                    }

                    if (myWindow.scrollTop() == 0) {
                        $scope.sectionTitleClasses[j] = '';
                    }

                    $scope.$digest();
                }
            }

            /**
             * Obtains the current scroll position of each DOM element supplied in the second parameter, and stores them
             * in an other array conservatively.
             * Used to determine the starting positions of the DOM elements.
             * @param initialScrollTops - an array in which on each index there is the position of the stickyTitle DOM element
             * @param stickyTitles = DOM elements
             * @returns the array of DOM element positions
             */
            function initScrollTops(initialScrollTops) {
                stickyTitles = $element.find('.alc-sticky-title'); // Obtain the sticky titles
                for (var i = 0; i < stickyTitles.length; i++) {
                    initialScrollTops.push(
                        angular.element(stickyTitles[i]).prop('offsetTop')
                    );
                }
                // console.info('scrollTops:', initialScrollTops);
                return initialScrollTops;
            }
        }
    }
})();


