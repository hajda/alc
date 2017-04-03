/**
 * Created by PD on 2016.03.10..
 */
(function temporaryContentServiceDefinition() {
    'use strict';

    angular
        .module('alcApp')
        .service('AlcTemporaryContentService', temporaryContentService)
    ;

    temporaryContentService.$inject = [];

    function temporaryContentService() {
        return {
            getContent: function getContetnt() {
                return content;
            },
            getMenuItems: function getContentMenuItemListDtos() {
                var menu = {items: {}};
                for (var page in content.pages) {
                    menu.items[page] = {
                        pageId: content.pages[page].pageId,
                        pageName: content.pages[page].pageName,
                        pageTitle: content.pages[page].pageTitle
                    };
                }
                return menu;
            }
        };


    }

    /** ******************************************************************************************************************************************************************************************************************************
     *
     * @type {{home: {}, pages: {news: {pageId: string, pageName: string, pageTitle: string, pageContent: {articles: [*]}}, dates: {pageId: string, pageName: string, pageTitle: string, pageContent: {tourDates: [*]}}}, footer: {}}}
     */
    var content = { // TODO load content from persistence
        home: {},
        pages: {
            news: { // News page -------------------------------
                pageId: 'news',
                pageName: 'news',
                pageTitle: 'News',
                pageContent: {
                    articles: [
                        { // First article
                            author: {
                                id: 1,
                                username: 'dev',
                                firstName: 'Dávid',
                                lastName: 'Hajba'
                            },
                            createdAt: '2017.03.20 20:36:28',
                            versions: [{modifiedBy: 'dev', modifiedAt: '2017.03.20 20:36:29'}],
                            lastModified: '2017.03.20 20:36:29',
                            status: 'actual',

                            title: 'Website has been created!',
                            subTitle: 'Aron\'s Land Cargo Co. has a new website now!',
                            preface: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
                            sections: [
                                {
                                    sectionType: 'normal',
                                    sectionTitle: 'Lorem ipsum',
                                    sectionSubtitle: 'Dolor sit amet, consectetur adipiscing elit.',
                                    paragraphs: [
                                        {
                                            paragraphType: 'normal',
                                            paragraphEmphasize: 'Nunc vitae odio at lectus vehicula convallis.',
                                            paragraph: 'Vivamus finibus eros erat, id interdum augue hendrerit id. Pellentesque posuere nunc vel commodo blandit. Sed maximus vel est in posuere. In in ante pretium, dictum odio non, condimentum arcu. Sed vel nisi quam. Sed at nulla nulla. Sed pretium diam diam, eu mattis ante sodales a. Cras justo ipsum, placerat eget rhoncus at, elementum vel justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
                                        },
                                        {
                                            paragraphType: 'normal',
                                            paragraph: 'Proin ornare scelerisque porta. Praesent lobortis pulvinar elit, quis luctus erat interdum vitae. Aenean tortor dui, pulvinar vel tortor vitae, rhoncus finibus purus. Suspendisse at eros convallis, convallis ante sagittis, ullamcorper felis. Donec imperdiet auctor porttitor. Fusce mattis neque eget condimentum suscipit. Sed ultricies eros ac mattis finibus. Donec luctus tellus eros, vel consequat lectus tincidunt ut. Phasellus sit amet tempor turpis, id tempus nisi. Integer pellentesque ante eu orci sagittis, non bibendum ante fringilla. Suspendisse faucibus orci eu velit posuere placerat. Aliquam aliquet odio ut pellentesque tristique. Etiam eu dui justo.'
                                        },
                                        {
                                            paragraphType: 'normal',
                                            paragraph: 'Etiam quis tempus magna. Sed odio orci, consectetur id suscipit nec, iaculis eget lectus. Suspendisse in dui mollis augue malesuada facilisis sit amet nec turpis. Phasellus ultrices sapien sit amet orci tempus, in scelerisque eros rhoncus. Cras maximus accumsan libero, et bibendum justo mattis id. Nunc eget venenatis sapien. Nunc a nisl lectus. Nullam vitae eleifend odio. Nam commodo justo vitae justo pretium rhoncus.'
                                        }
                                    ]
                                },
                                {
                                    author: {
                                        id: 1,
                                        username: 'dev',
                                        firstName: 'Dávid',
                                        lastName: 'Hajba'
                                    },
                                    sectionType: 'normal',
                                    sectionTitle: undefined,
                                    sectionSubtitle: undefined,
                                    paragraphs: [
                                        {
                                            paragraphType: 'bigcite',
                                            paragraphEmphasize: undefined,
                                            paragraph: 'Vivamus finibus eros erat, id interdum augue hendrerit id. Pellentesque posuere nunc vel commodo blandit. Sed maximus vel est in posuere. In in ante pretium, dictum odio non, condimentum arcu. Sed vel nisi quam. Sed at nulla nulla. Sed pretium diam diam, eu mattis ante sodales a. Cras justo ipsum, placerat eget rhoncus at, elementum vel justo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            },
            dates: {
                pageId: 'dates',
                pageName: 'dates',
                pageTitle: 'Dates',
                pageContent: {
                    tourDates: [
                        {
                            tourDate: '2017.03.26 20:00:00'
                        },
                        {
                            tourDate: '2017.04.26 20:00:00'
                        },
                        {
                            tourDate: '2017.04.26 20:00:00'
                        },
                        {
                            tourDate: '2017.04.26 20:00:00'
                        },
                        {
                            tourDate: '2017.04.26 20:00:00'
                        },
                        {
                            tourDate: '2017.04.26 20:00:00'
                        },
                        {
                            tourDate: '2017.04.26 20:00:00'
                        },
                        {
                            tourDate: '2017.04.26 20:00:00'
                        },
                        {
                            tourDate: '2017.04.26 20:00:00'
                        },
                        {
                            tourDate: '2017.04.26 20:00:00'
                        },
                        {
                            tourDate: '2017.04.26 20:00:00'
                        },
                        {
                            tourDate: '2017.04.26 20:00:00'
                        },
                        {
                            tourDate: '2017.04.26 20:00:00'
                        },
                        {
                            tourDate: '2017.04.26 20:00:00'
                        },
                        {
                            tourDate: '2017.04.26 20:00:00'
                        },
                        {
                            tourDate: '2017.04.26 20:00:00'
                        },
                        {
                            tourDate: '2017.04.26 20:00:00'
                        },
                        {
                            tourDate: '2017.04.26 20:00:00'
                        },
                        {
                            tourDate: '2017.04.26 20:00:00'
                        },
                        {
                            tourDate: '2017.04.26 20:00:00'
                        },
                        {
                            tourDate: '2017.04.26 20:00:00'
                        },
                        {
                            tourDate: '2017.04.26 20:00:00'
                        }
                    ]
                }
            },
            gallery: {
                pageId: 'gallery',
                pageName: 'gallery',
                pageTitle: 'Gallery',
                pageContent: {
                    albums: [
                        {
                            id: 1,
                            title: 'Album 1',
                            coverSrc: 'album1/picture3.jpg',
                            createdBy: {
                                id: 1,
                                username: 'dev',
                                firstName: 'Dávid',
                                lastName: 'Hajba'
                            },
                            createdAt: '2017.04.09 17:20:00:967',
                            lastModified: null,
                            modifications: [],
                            items: [
                                {
                                    id: 1,
                                    name: 'picture1',
                                    contentType: 'img',
                                    src: 'album1/picture1.jpg',
                                    title: 'Picture 1',
                                    author: {
                                        id: 2,
                                        username: 'Kósa',
                                        firstName: 'Kósa',
                                        lastName: undefined
                                    },
                                    description: null,
                                    location: {
                                        id: 1,
                                        name: 'place1',
                                        keyWords: 'place1 budapest',
                                        coordinates: null,address: null,
                                        url: 'www.place1.com'
                                    },
                                    createdAt: '2014.04.21 20:17'
                                },
                                {
                                    id: 2,
                                    name: 'picture2',
                                    contentType: 'img',
                                    src: 'album1/picture2.jpg',
                                    title: 'Picture 2',
                                    author: {
                                        id: 2,
                                        username: 'Kósa',
                                        firstName: 'Kósa',
                                        lastName: undefined
                                    },
                                    description: null,
                                    location: {
                                        id: 1,
                                        name: 'place1',
                                        keyWords: 'place1 budapest',
                                        coordinates: null,address: null,
                                        url: 'www.place1.com'
                                    },
                                    time: '2017.04.09 17:36'
                                },
                                {
                                    id: 3,
                                    name: 'picture3',
                                    contentType: 'img',
                                    src: 'album1/picture3.jpg',
                                    title: 'Picture 3',
                                    author: {
                                        id: 1,
                                        username: 'dev',
                                        firstName: 'Dávid',
                                        lastName: 'Hajba'
                                    },
                                    description: null,
                                    location: {
                                        id: 1,
                                        name: 'place1',
                                        keyWords: 'place1 budapest',
                                        coordinates: null,address: null,
                                        url: 'www.place1.com'
                                    },
                                    time: '2017.04.09 17:36'
                                },
                                {
                                    id: 4,
                                    name: 'picture4',
                                    contentType: 'img',
                                    src: 'album1/picture4.jpg',
                                    title: 'Picture 4',
                                    author: {
                                        id: 1,
                                        username: 'dev',
                                        firstName: 'Dávid',
                                        lastName: 'Hajba'
                                    },
                                    description: null,
                                    location: {
                                        id: 1,
                                        name: 'place1',
                                        keyWords: 'place1 budapest',
                                        coordinates: null,address: null,
                                        url: 'www.place1.com'
                                    },
                                    time: '2017.04.09 17:36'
                                },
                                {
                                    id: 5,
                                    name: 'picture5',
                                    contentType: 'img',
                                    src: 'album1/picture5.jpg',
                                    title: 'Picture 5',
                                    author: {
                                        id: 1,
                                        username: 'dev',
                                        firstName: 'Dávid',
                                        lastName: 'Hajba'
                                    },
                                    description: null,
                                    location: {
                                        id: 1,
                                        name: 'place1',
                                        keyWords: 'place1 budapest',
                                        coordinates: null,address: null,
                                        url: 'www.place1.com'
                                    },
                                    time: '2017.04.09 17:36'
                                },
                                {
                                    id: 6,
                                    name: 'picture6',
                                    contentType: 'img',
                                    src: 'album1/picture6.jpg',
                                    title: 'Picture 6',
                                    author: {
                                        id: 2,
                                        username: 'Kósa',
                                        firstName: 'Kósa',
                                        lastName: undefined
                                    },
                                    description: null,
                                    location: {
                                        id: 1,
                                        name: 'place1',
                                        keyWords: 'place1 budapest',
                                        coordinates: null,address: null,
                                        url: 'www.place1.com'
                                    },
                                    time: '2017.04.09 17:36'
                                },
                                {
                                    id: 7,
                                    name: 'picture7',
                                    contentType: 'img',
                                    src: 'album1/picture7.jpg',
                                    title: 'Picture 7',
                                    author: {
                                        id: 2,
                                        username: 'Kósa',
                                        firstName: 'Kósa',
                                        lastName: undefined
                                    },
                                    description: null,
                                    location: {
                                        id: 1,
                                        name: 'place1',
                                        keyWords: 'place1 budapest',
                                        coordinates: null,address: null,
                                        url: 'www.place1.com'
                                    },
                                    time: '2017.04.09 17:36'
                                },
                                {
                                    id: 8,
                                    name: 'picture8',
                                    contentType: 'img',
                                    src: 'album1/picture8.png',
                                    title: 'Picture 8',
                                    author: {
                                        id: 1,
                                        username: 'dev',
                                        firstName: 'Dávid',
                                        lastName: 'Hajba'
                                    },
                                    description: null,
                                    location: {
                                        id: 1,
                                        name: 'place1',
                                        keyWords: 'place1 budapest',
                                        coordinates: null,address: null,
                                        url: 'www.place1.com'
                                    },
                                    time: '2017.04.09 17:36'
                                },
                                {
                                    id: 9,
                                    name: 'picture9',
                                    contentType: 'img',
                                    src: 'album1/picture9.jpg',
                                    title: 'Picture 9',
                                    author: {
                                        id: 1,
                                        username: 'dev',
                                        firstName: 'Dávid',
                                        lastName: 'Hajba'
                                    },
                                    description: null,
                                    location: {
                                        id: 1,
                                        name: 'place1',
                                        keyWords: 'place1 budapest',
                                        coordinates: null,address: null,
                                        url: 'www.place1.com'
                                    },
                                    time: '2017.04.09 17:36'
                                },
                                {
                                    id: 10,
                                    name: 'picture10',
                                    contentType: 'img',
                                    src: 'album1/picture10.jpg',
                                    title: 'Picture 10',
                                    author: {
                                        id: 1,
                                        username: 'dev',
                                        firstName: 'Dávid',
                                        lastName: 'Hajba'
                                    },
                                    description: null,
                                    location: {
                                        id: 1,
                                        name: 'place1',
                                        keyWords: 'place1 budapest',
                                        coordinates: null,address: null,
                                        url: 'www.place1.com'
                                    },
                                    time: '2017.04.09 17:36'
                                },
                                {
                                    id: 9999,
                                    name: 'lastPicture',
                                    contentType: 'img',
                                    src: 'album1/lastPicture.jpg',
                                    title: 'Last picture',
                                    author: {
                                        id: 1,
                                        username: 'dev',
                                        firstName: 'Dávid',
                                        lastName: 'Hajba'
                                    },
                                    description: null,
                                    location: {
                                        id: 1,
                                        name: 'place1',
                                        keyWords: 'place1 budapest',
                                        coordinates: null,address: null,
                                        url: 'www.place1.com'
                                    },
                                    time: '2017.04.09 17:36'
                                }
                            ]
                        },
                        {
                            id: 2,
                            title: 'Profile',
                            coverSrc: 'profile/3.jpg',
                            createdBy: {
                                id: 3,
                                username: 'furge',
                                firstName: null,
                                lastName: null,
                                nickName: 'Fürge'
                            },
                            createdAt: '2017.04.20 22:10:00:967',
                            lastModified: null,
                            modifications: [],
                            items: [
                                {
                                    id: 21,
                                    name: 'profile1',
                                    contentType: 'img',
                                    src: 'profile/1.jpg',
                                    title: 'Profile 1',
                                    createdBy: {
                                        id: 3,
                                        username: 'furge',
                                        firstName: null,
                                        lastName: null,
                                        nickName: 'Fürge'
                                    },
                                    description: null,
                                    location: null
                                },
                                {
                                    id: 22,
                                    name: 'profile2',
                                    contentType: 'img',
                                    src: 'profile/2.jpg',
                                    title: 'Profile 2',
                                    createdBy: {
                                        id: 3,
                                        username: 'furge',
                                        firstName: null,
                                        lastName: null,
                                        nickName: 'Fürge'
                                    },
                                    description: null,
                                    location: null
                                },
                                {
                                    id: 23,
                                    name: 'profile3',
                                    contentType: 'img',
                                    src: 'profile/3.jpg',
                                    title: 'Profile 3',
                                    createdBy: {
                                        id: 3,
                                        username: 'furge',
                                        firstName: null,
                                        lastName: null,
                                        nickName: 'Fürge'
                                    },
                                    description: null,
                                    location: null
                                }
                            ]
                        }
                    ]
                }
            },
            fourthPage: {
                pageId: 'fourthPage',
                pageName: 'fourthPage',
                pageTitle: 'Fourth Page',
                pageContent: {
                }
            },
            fifthPage: {
                pageId: 'fifthPage',
                pageName: 'fifthPage',
                pageTitle: 'Fifth Page',
                pageContent: {
                }
            },
            sixthPage: {
                pageId: 'sixthPage',
                pageName: 'sixthPage',
                pageTitle: 'Sixth Page',
                pageContent: {
                }
            }
        },

        footer: {}
    };


})();


