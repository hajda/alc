(function galleryStateDefinition() {
    'use strict';

    angular
        .module('alcApp')
        .config(alcGalleryStateConfig);

    alcGalleryStateConfig.$inject = ['$stateProvider'];

    function alcGalleryStateConfig($stateProvider) {
        $stateProvider.state(
            'alcGalleryState',
            {
                parent: 'app', // TODO review parent
                url: '/alc-gallery', // TODO review URL
                data: {
                    authorities: [], // TODO set up access rights
                    pageTitle: 'gallery', // TODO review page title
                    readableName: 'Gallery' // TODO review page title
                },
                views: {
                    'content@': {
                        templateUrl: 'app/gallery/gallery.html'//,   // TODO update template url if the state is not directly under the app directory
                        // controller: 'AlcGalleryController' // TODO review hooked controller
                    }
                },
                resolve: {
                    translatePartialLoader: ['$translate', '$translatePartialLoader', function ($translate,$translatePartialLoader) {
                        $translatePartialLoader.addPart('alcGalleryState');
                        return $translate.refresh();
                    }]
                }
            }
        );
    }
})();
