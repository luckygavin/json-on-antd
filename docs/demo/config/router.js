// define(['App','Page1','Page2'], function(App, Page1, Page2) {
//     // code ...
// });
define(function(require) {
    var App = require('App');
    var Page1 = require('Page1');
    var Page2 = require('Page2');
    var Theme = require('Theme');
    return {
        type: 'router',
        // history: 'browserHistory',
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
                            {path: 'card3(/:title)', breadcrumbName: '卡片3', component: 'Page2'}
                            // {path: 'card3', breadcrumbName: '卡片3', component: Page1.Card3}
                        ]
                    },
                    {path: 'theme', breadcrumbName: '主题', component: Theme}
                ]
            }

        ]
    };
});
