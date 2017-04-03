(function imageFrameServiceDefinition() {
    'use strict';

    angular.module('alcApp')
        .factory('AlcImageFrame', imageFrameService);

    imageFrameService.$inject = [];

    function imageFrameService() {
        return {
            updateFrame: updateFrame
        };

        function updateFrame($element, attribs) {
            var backgroundSize, placeholderUrl, backgroundUrl;

            (function init() {
                switch (attribs.alignImage) {
                    case 'fit' : {
                        backgroundSize = 'contain';
                        break;
                    }
                    case 'fill' : {
                        backgroundSize = 'cover';
                        break;
                    }
                    default: {
                        backgroundSize = attribs.alignImage;
                    }
                }

                applyStyle();
            })();

            function applyStyle() {
                $element.css({
                    'background-image' : 'url(' + attribs.src +')',
                    'background-size' : backgroundSize || 'initial',
                    'background-attachment' : attribs.attachment || 'scroll',
                    'background-position' : 'center',
                    'background-repeat': 'no-repeat'
                });


                /**
                 * This is supposed to get the fixed bg attachment work on mobiles, but it does not.
                 * See stackoverflow answer: http://stackoverflow.com/a/33057806/4809372
                 * on question page: http://stackoverflow.com/questions/26372127/background-fixed-no-repeat-not-working-on-mobile
                 */
                var before = $element.find('.alc-album-cover:before');
                before.css({
                    'content': '',
                    'display' : 'block',
                    'position' : 'fixed',
                    'left' : '0',
                    'top' : '0',
                    'width' : '100%',
                    'height' : '100%',
                    'z-index' : '-10',
                    'background' : 'url(photos/2452.jpg) no-repeat center center',
                    '-webkit-background-size' : 'cover',
                    '-moz-background-size' : 'cover',
                    '-o-background-size' : 'cover',
                    'background-size' : 'cover'
                });
            }
        }
    }
})();

