一个项目包含有多个页面，通过前端路由控制各个页面的跳转，即形成一个单页应用。


## 开始


### 1、准备 html 文件

首先准备一个`demo.html`文件。

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="http://uf.baidu.com/css/theme.min.css" />
        <link rel="stylesheet" href="http://uf.baidu.com/css/uf_v0.2.css" />
        <script src="http://uf.baidu.com/dist/dll.min.js"></script>
        <script src="http://uf.baidu.com/dist/antd.min.js"></script>
        <script src="http://uf.baidu.com/dist/uf_v0.2.js"></script>
        <!-- <style>html, body {height: auto !important;}</style> -->
        <title>一个简单的项目示例</title>
    </head>
    <body>
        <div id="main"></div>
        <script>
            // document.domain = 'baidu.com';
            UF.config({
                modules: {
                    baseUrl: './',
                    paths: {
                        Router: 'router',
                        App: 'app',
                        Page1: 'page1',
                        Page2: 'page2'
                    }
                }
            });
            UF.init('Router', 'main');
        </script>
    </body>
</html>
```
以上html文件做了三件事：  
##### 一、首先引入了依赖的库文件
##### 二、然后配置项目全部模块路径
paths里面定义了四个模块的路径，这里省略了文件的后缀，例如：Router模块对应的文件为`./router.js`。  
> 更多`UF.config()`的用法可见 [全局配置](#/Develop/Config)

##### 三、初始化页面
使用路由模块对页面进行初始化。


### 2、入口模块

新建一个`router.js`文件，作为项目入口文件，指定路由及对应模块的关系。

```javascript
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
```
router模块主要用于配置路由和各个模块间的关系。`router`组件的用法见 [Router 路由](#/General/Router)。

和其他模块相同，每一个模块均为`define(function(){ ... })`，define包含的函数中需`return {...};`返回当前模块的配置。

`require()`用来引入当前模块依赖的其他模块，框架会先加载全部依赖的模块再执行下面的逻辑。`require`函数的返回值为定义模块时`return {...}`返回来的配置。

> 更多关于模块如何组织、开发，可见 [模块开发](#/Develop/Modules)


### 3、App模块

App模块为整个项目的框架，其中定义了页面的布局等。从router.js的配置中也可以看出，App模块是跟模块，其他模块渲染之前都会先渲染App。

新建一个`app.js`文件。
```javascript
define(function() {
    return [
        {
            type: "menu",
            mode: "horizontal",
            theme: "dark",
            items: [
                {
                    key: "mail",
                    link: '/card',
                    icon: 'mail',
                    title: 'Navigation One'
                },
                {
                    key: "sub",
                    icon: 'setting',
                    title: 'Navigation Two - Submenu',
                    childItems: [
                        {
                            key: "setting:1",
                            link: '/card2',
                            title: 'Option 1'
                        },
                        {
                            key: "setting:2",
                            link: '/card2/card3',
                            title: 'Option 2'
                        }
                    ]
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
});

```
此模块使用基本组件的组合搭配实现页面的布局等。值得注意的是，靠底部的部分有个`childrenHolder`属性，配合路由使用，声明模块所在路由中 子路由对应的组件 会渲染到当前模块的 childrenHolder 所处位置


### 4、Page1模块、Page2模块

Page1模块`page1.js`实现如下：

```javascript
define(function() {
    var Card1 = {
        type: 'card',
        title: 'Card title',
        bordered: false,
        loading: true
    };
    var Card2 = {
        type: 'card',
        title: 'Card title',
        bordered: false,
        childrenHolder: true
    };
    var Card3 = {
        type: 'card',
        title: 'Card title 3',
        loading: true
    };
    return {
        Card1: Card1,
        Card2: Card2,
        Card3: Card3
    };
});
```

Page2模块`page2.js`实现如下：

```javascript
define({
    type: 'card',
    title: 'Card title 3',
    loading: true
});
```

至此，配置上面demo的工作就完成了。可以在浏览器上打开刚开始定义的`demo.html`查看效果。

