define(function(require) {
    var App = require('App');
    var Page1 = require('Page1');
    return {
        type: 'router',
        routes: [
            {
                path: '/',
                component: App,
                breadcrumbName: '首页',
                indexRoute: {component: Page1.Card1},
                childRoutes: [
                    {path: 'card', breadcrumbName: '卡片', component: Page1.Card1},
                    {path: 'card2', breadcrumbName: '卡片2', component: Page1.Card2,
                        childRoutes: [
                            {path: 'card3', breadcrumbName: '卡片3', component: 'Page2'}
                            // {path: 'card3', breadcrumbName: '卡片3', component: Page1.Card3}
                        ]
                    }
                ]
            }
        ]
    };
});
