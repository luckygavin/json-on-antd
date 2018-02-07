为了最大程度上减少使用的门槛，我们底层引入了 requirejs 来实现模块化加载，【快速上手】及【模块开发】中介绍的开发模式皆是用的 requirejs 实现的。

对于有一定前端基础的前端同学来说，可能这种开发模式并不是最方便，这里我们来介绍另一种开发模式：**使用构建工具来进行模块化开发**。

## 第一个例子

这里不会介绍构建工具如何使用，其实和用什么构建工具无关，关键是模块组织上与前一种开发模式上有所不同。

还是拿【快速上手】上面的例子来说明，用当前这种开发模式代码如何书写。

> demo 中使用的是 es6 的方式进行`import`、`export`


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
        <script src="./bundle.js"></script>
    </body>
</html>
```
**`./bundle.js`文件为构建工具把全部模块打包生成的文件。**

这里因为不再用 requirejs ，所以无需再用`UF.config()`配置modules属性。


### 入口模块

新建一个`router.js`文件，作为项目入口文件，指定路由及对应模块的关系。**在这里，同时也是构建工具的入口文件。**

```javascript
import App from './app.js';
import Page1 from './page1.js';
import Page2 from './page2.js';
export default {
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
                        {path: 'card3', breadcrumbName: '卡片3', component: Page2}
                    ]
                }
            ]
        }
    ]
}
```
**不再存在懒加载的模块，全部模块使用前必定是`import`过的。**


### App模块

新建一个`app.js`文件。

```javascript
export default [
    {
        type: "menu",
        ...
    },
    {
        type: 'breadcrumb'
    },
    {
        type: 'div',
        ...
    }
];
```

### Page1模块、Page2模块

Page1模块`page1.js`实现如下：

```javascript
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
export default {
    Card1: Card1,
    Card2: Card2,
    Card3: Card3
};
```

Page2模块`page2.js`实现如下：

```javascript
export default {
    type: 'card',
    title: 'Card title 3',
    loading: true
};
```

**模块开发好后，最后使用构建工具生成`demo.html`中引用的`bundle.js`文件即可。**

> TODO: 后面可以写个webpack安装配置的教程。
