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
                            author: 'dev',
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
            thirdPage: {
                pageId: 'thirdPage',
                pageName: 'thirdPage',
                pageTitle: 'Third Page',
                pageContent: {
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


