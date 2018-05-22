
## 关于组件中获取 路由 携带的数据

最常用的场景是：点击列表页的查看详情，页面跳转到详情页面，一般会在url上携带详情页的id等信息，如：`/blog/101`

那么，具体在项目中如何使用呢：

**1、首先配置路由如下：**
```javascript
{
    path: 'blog/:id',
    component: require('blog/details'),
    breadcrumbName: '详情'
}
// 也可以有多个参数
{
    path: 'blog/:type/:id',
    component: require('blog/details'),
    breadcrumbName: '详情'
}
```
`:xxx` 格式为定义的参数，和其他语言用法基本一致，也可以有多个参数。

**2、再来看 blog/details 模块中参数的用法**

此处举个最简单的例子，在details中把路由中传递的参数展示出来：

```javascript
define(function (require) {
    return function(params, routes) {
        return {
            type: 'card',
            title: '详情页：',
            content: 'id为：' + params.id
        }
    };
});
```

如上，本来一个普通的组件是直接 return 一个组件配置的。不过框架也提供了可以返回一个函数，函数内部再返回组件配置。如此，函数会传入两个参数：`params`、`routes`。

> `params`为路由上传入的参数，如上如果多个参数，则params内包含多项；  
> `routes`为除params外的更多路由信息。



