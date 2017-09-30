<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <?php include_once('./code.php') ?>
        <title>待路由的页面示例</title>
    </head>
    <body>
        <div id="demo"></div>
        <!-- <div id="demo" style="height: 500px;"></div> -->
        <script>
            document.domain = 'baidu.com';

            const Card = {
                type: 'card',
                title: 'Card title',
                bordered: false,
                loading: true
            };
            const Card2 = {
                type: 'card',
                title: 'Card title',
                bordered: false,
                childrenHolder: true
            };
            const Card3 = {
                type: 'card',
                title: 'Card title 3',
                loading: true
            };
            const App = [
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

            const page = {
                type: 'router',
                key: 'router',
                // history: 'hashHistory',
                content: {
                    type: 'route',
                    key: 'route',
                    breadcrumbName: '首页',
                    path: '/',
                    component: App,
                    content: [
                        {
                            type: 'index-route',
                            component: Card
                        },
                        {
                            type: 'route',
                            path: 'card',
                            breadcrumbName: '卡片',
                            component: Card
                        },
                        {
                            type: 'route',
                            path: 'card2',
                            breadcrumbName: '卡片2',
                            component: Card2,
                            content: {
                                type: 'route',
                                path: 'card3',
                                breadcrumbName: '卡片3',
                                component: Card3
                            }
                        }
                    ]
                }
            };

            const page2 = {
                type: 'router',
                // history: 'hashHistory',
                routes: [
                    {
                        path: '/',
                        component: App,
                        breadcrumbName: '首页',
                        indexRoute: {component: Card},
                        childRoutes: [
                            {path: 'card', breadcrumbName: '卡片', component: Card},
                            {path: 'card2', breadcrumbName: '卡片2', component: Card2,
                                childRoutes: [
                                    {path: 'card3', breadcrumbName: '卡片3', component: Card3}
                                ]
                            }
                        ]
                    }
                ]
            };

            UF.init(page2, 'demo');
        </script>
    </body>
</html>
