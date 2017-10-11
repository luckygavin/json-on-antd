define(function(require) {
    var Card = require('Card');
    var App = [
        {
            type: "menu",
            mode: "horizontal",
            theme: "dark",
            content: [
                {
                    type: "menu-item",
                    key: "mail",
                    content: {
                        type: 'link',
                        to: '/card',
                        content: [
                            {
                                type: "icon",
                                mode: "mail"
                            },
                            "Navigation One"
                        ]
                    }
                },
                {
                    type: "sub-menu",
                    key: "sub",
                    title: [
                        {
                            type: "icon",
                            mode: "setting"
                        },
                        "Navigation Two - Submenu"
                    ],
                    content: {
                        type: "menu-item-group",
                        title: "Item 1",
                        content: [
                            {
                                type: "menu-item",
                                key: "setting:1",
                                content: {
                                    type: 'link',
                                    to: '/card2',
                                    content: "Option 1"
                                }
                            },
                            {
                                type: "menu-item",
                                key: "setting:2",
                                content: {
                                    type: 'link',
                                    to: '/card2/card3',
                                    content: "Option 2"
                                }
                            }
                        ]
                    }
                }
            ]
        },
        {
            type: 'breadcrumb',
            style: {margin: '12px 24px'}
        },
        {
            type: 'div',
            style: {background: '#eee', padding: '35px'},
            childrenHolder: true,
            content: {
                type: 'div',
                style: {background: '#ddd', padding: '25px'}
            }
        }
    ];

    return {
        type: 'router',
        routes: [
            {
                path: '/',
                component: App,
                breadcrumbName: '首页',
                indexRoute: {component: Card.Card1},
                childRoutes: [
                    {path: 'card', breadcrumbName: '卡片', component: Card.Card1},
                    {path: 'card2', breadcrumbName: '卡片2', component: Card.Card2,
                        childRoutes: [
                            // {path: 'card3', breadcrumbName: '卡片3', component: 'Card3'}
                            {path: 'card3', breadcrumbName: '卡片3', component: Card.Card3}
                        ]
                    }
                ]
            }
        ]
    };
});
