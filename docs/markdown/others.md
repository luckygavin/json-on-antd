
## 关于组件中获取 路由 携带的数据

最常用的场景是：点击列表页的查看详情，页面跳转到详情页面，一般会在url上携带详情页的id等信息，如：`/blog/101`

那么，具体在项目中如何使用呢：

#### 用法一：

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
    return function(params, detials) {
        return {
            type: 'card',
            title: '详情页：',
            content: 'id为：' + params.id
        }
    };
});
```

如上，本来一个普通的组件是直接 return 一个组件配置的。不过框架也提供了可以返回一个函数，函数内部再返回组件配置。如此，函数会传入两个参数：`params`、`detials`。

> `params`为路由上传入的参数，如上如果多个参数，则params内包含多项；  
> `detials`为包括params在内的更多路由信息，比如当前路由路径的

#### 用法2：

调用`UF.getRouter()`函数获取参数

```javascript
define(function (require) {
    return function() {
        return {
            type: 'card',
            title: '详情页：',
            content: 'id为：' + UF.getRouter().params.id
        }
    };
});
```


## 关于 Ajax 中的 error 配置

使用 `UF.ajax`、`source`系列参数、`api`系列参数时，如果不配置`error`之类的错误处理函数，会有默认的处理逻辑把错误报出来。

可以通过配置`error`函数加入自己错误处理逻辑。如果自定义的错误处理函数没有任何返回结果，或者返回的不为`false`，则依然会执行默认的错误处理逻辑把错误报出来。只有当`return false;`时，才会阻止执行默认报错逻辑（有点像dom中的阻止事件冒泡）。

如下，当获取数据出错时，只会再控制台打印出错误信息，不会再给用户提示：
```javascript
{
    source: {
        url: '/uf/docs/php/data2.php',
        onError: function (res) {
            console.log(res);
            return false;
        }
    }
}
```

组件文档请见：[组件](#/Custom/Export)